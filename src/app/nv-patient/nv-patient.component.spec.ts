import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPatientComponent } from './nv-patient.component';

describe('NvPatientComponent', () => {
  let component: NvPatientComponent;
  let fixture: ComponentFixture<NvPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
