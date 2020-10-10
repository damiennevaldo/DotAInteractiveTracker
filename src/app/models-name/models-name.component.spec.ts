import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsNameComponent } from './models-name.component';

describe('ModelsNameComponent', () => {
  let component: ModelsNameComponent;
  let fixture: ComponentFixture<ModelsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
