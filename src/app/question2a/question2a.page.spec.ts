import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2aPage } from './question2a.page';

describe('Question2aPage', () => {
  let component: Question2aPage;
  let fixture: ComponentFixture<Question2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
