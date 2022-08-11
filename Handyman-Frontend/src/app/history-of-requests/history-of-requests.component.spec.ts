import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfRequestsComponent } from './history-of-requests.component';

describe('HistoryOfRequestsComponent', () => {
  let component: HistoryOfRequestsComponent;
  let fixture: ComponentFixture<HistoryOfRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
