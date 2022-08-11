import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberComponentComponent } from './plumber-component.component';

describe('PlumberComponentComponent', () => {
  let component: PlumberComponentComponent;
  let fixture: ComponentFixture<PlumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
