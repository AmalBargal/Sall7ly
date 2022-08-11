import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandymenComponent } from './handymen.component';

describe('HandymenComponent', () => {
  let component: HandymenComponent;
  let fixture: ComponentFixture<HandymenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandymenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandymenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
