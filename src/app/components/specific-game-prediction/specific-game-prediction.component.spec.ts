import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificGamePredictionComponent } from './specific-game-prediction.component';

describe('SpecificGamePredictionComponent', () => {
  let component: SpecificGamePredictionComponent;
  let fixture: ComponentFixture<SpecificGamePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificGamePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificGamePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
