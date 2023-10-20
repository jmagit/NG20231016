/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

export function nifValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null; }
      const err = { nif: { invalidFormat: true, invalidChar: true, message: 'NIF invalido' } };
      if (/^\d{1,8}\w$/.test(control.value)) {
          const letterValue = control.value.substr(control.value.length - 1);
          const numberValue = control.value.substr(0, control.value.length - 1);
          err.nif.invalidFormat = false;
          return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
      } else { return err; }
  };
}
@Directive({
    selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidator, multi: true }],
    standalone: true
})
export class NIFValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return nifValidator()(control);
  }
}

export function uppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null; }
      return control.value === control.value.toUpperCase() ? null : { uppercase: 'Debe estar en mayúsculas'}
  };
}
@Directive({
    selector: '[uppercase][formControlName],[uppercase][formControl],[uppercase][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UPPERCASEValidator, multi: true }],
    standalone: true
})
export class UPPERCASEValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return uppercaseValidator()(control);
  }
}

@Directive({
    selector: '[type][formControlName],[type][formControl],[type][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => TypeValidator), multi: true }
    ],
    standalone: true
})
export class TypeValidator implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
      const valor = control.value;
      if (valor) {
        const dom = this.elem.nativeElement;
        if (dom.validity) { // dom.checkValidity();
          return (dom.validity.typeMismatch || dom.validity.stepMismatch) ? { 'type': dom.validationMessage } : null;
        }
      }
      return null;
  }
}


export const MIS_VALIDADORES = [ NIFValidator, UPPERCASEValidator, TypeValidator, ]
