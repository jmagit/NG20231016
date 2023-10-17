import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';

xdescribe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosComponent]
    });
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
