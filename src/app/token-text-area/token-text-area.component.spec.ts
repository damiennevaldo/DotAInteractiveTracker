import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTextAreaComponent } from './token-text-area.component';

describe('TokenTextAreaComponent', () => {
  let component: TokenTextAreaComponent;
  let fixture: ComponentFixture<TokenTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
