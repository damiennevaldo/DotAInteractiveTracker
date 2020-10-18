import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGamesPredictedComponent } from './history-games-predicted.component';

describe('HistoryGamesPredictedComponent', () => {
  let component: HistoryGamesPredictedComponent;
  let fixture: ComponentFixture<HistoryGamesPredictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryGamesPredictedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryGamesPredictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
