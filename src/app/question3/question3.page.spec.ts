import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3Page } from './question3.page';

describe('Question3Page', () => {
  let component: Question3Page;
  let fixture: ComponentFixture<Question3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
