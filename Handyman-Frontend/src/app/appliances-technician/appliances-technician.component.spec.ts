import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesTechnicianComponent } from './appliances-technician.component';

describe('AppliancesTechnicianComponent', () => {
  let component: AppliancesTechnicianComponent;
  let fixture: ComponentFixture<AppliancesTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancesTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
