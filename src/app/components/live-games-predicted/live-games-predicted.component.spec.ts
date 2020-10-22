import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGamesPredictedComponent } from './live-games-predicted.component';

describe('LiveGamesPredictedComponent', () => {
  let component: LiveGamesPredictedComponent;
  let fixture: ComponentFixture<LiveGamesPredictedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveGamesPredictedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGamesPredictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
