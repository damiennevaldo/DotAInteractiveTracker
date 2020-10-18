import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsScoreComponent } from './models-score.component';

describe('ModelsScoreComponent', () => {
  let component: ModelsScoreComponent;
  let fixture: ComponentFixture<ModelsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
