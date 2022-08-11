import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingRequestComponent } from './upcoming-request.component';

describe('UpcomingRequestComponent', () => {
  let component: UpcomingRequestComponent;
  let fixture: ComponentFixture<UpcomingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
