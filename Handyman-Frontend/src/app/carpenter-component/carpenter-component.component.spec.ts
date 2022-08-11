import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpenterComponentComponent } from './carpenter-component.component';

describe('CarpenterComponentComponent', () => {
  let component: CarpenterComponentComponent;
  let fixture: ComponentFixture<CarpenterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpenterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
