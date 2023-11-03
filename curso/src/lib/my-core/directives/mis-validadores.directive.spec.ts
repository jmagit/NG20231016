import { FormControl, FormsModule } from '@angular/forms';
import { nifnieValidator, NIFNIEValidator, uppercaseValidator, UppercaseValidator } from './mis-validadores.directive';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('nifnieValidator', () => {
  const esNIFNIE = nifnieValidator()
  const control = new FormControl('input');

  describe('NIFNIE OK', () => {
    ['12345678z', '12345678Z', '1234S', '4g', 'X1234567L', 'Z1234567R', null].forEach(caso => {
      it(`NIFNIE: ${caso}`, () => {
        control.setValue(caso);
        expect(esNIFNIE(control)).toBeNull()
      })
    })
  });

  describe('NIFNIE KO', () => {
    ['1234J', '12345678', 'Z', 'Z12345678', 'Y1234567L'].forEach(caso => {
      it(`NIFNIE: ${caso}`, () => {
        control.setValue(caso);
        expect(esNIFNIE(control)).not.toBeNull()
      })
    })
  });
  it('NIFNIEValidator', () => {
    const directive = new NIFNIEValidator();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});

@Component({
  template: `<input type="text" [(ngModel)]="valor" #myInput="ngModel" nifnie >`
})
class nifnieValidatorHostComponent {
  @ViewChild('myInput') control?: FormControl<string>
  valor = '';
}

describe('NIFNIEValidator', () => {
  let component: nifnieValidatorHostComponent;
  let fixture: ComponentFixture<nifnieValidatorHostComponent>;
  const control = new FormControl('input');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [nifnieValidatorHostComponent, NIFNIEValidator],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(nifnieValidatorHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`OK`, waitForAsync(() => {
    const valor = '12345678z'
    component.valor = valor
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.control).withContext('control').toBeDefined()
      expect(component.control?.value).withContext('value').toBe(valor)
      expect(component.control?.valid).withContext('valid').toBeTrue()
      expect(component.control?.errors).withContext('errors').toBeNull()
    })
  }))

  it(`KO`, waitForAsync(async () => {
    const valor = '12345678'
    component.valor = valor
    fixture.detectChanges()
    await fixture.whenStable()
    expect(component.control).withContext('control').toBeDefined()
    expect(component.control?.value).withContext('value').toBe(valor)
    expect(component.control?.invalid).withContext('invalid').toBeTrue()
    expect(component.control?.errors).withContext('errors').toBeDefined()
    expect(component.control?.errors?.['nifnie']).withContext('nifnie').toBeDefined()
  }))
});


describe('uppercaseValidator', () => {
  const esUppercase = uppercaseValidator()
  const control = new FormControl('input');
  describe('Uppercase OK', () => {
    ['12345678', 'CASA', null].forEach(caso => {
      it(`Uppercase: ${caso}`, () => {
        control.setValue(caso);
        expect(esUppercase(control)).toBeNull()
      })
    })
  });

  describe('Uppercase KO', () => {
    ['Algo', '12345678z', 'casa'].forEach(caso => {
      it(`Uppercase: ${caso}`, () => {
        control.setValue(caso);
        expect(esUppercase(control)).not.toBeNull()
      })
    })
  });

  it('UppercaseValidator', () => {
    const directive = new UppercaseValidator();
    control.setValue(null);
    expect(directive.validate(control)).toBeNull();
  })
});

