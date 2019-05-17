import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1cPage } from './question1c.page';

describe('Question1cPage', () => {
  let component: Question1cPage;
  let fixture: ComponentFixture<Question1cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
