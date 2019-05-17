import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2cPage } from './question2c.page';

describe('Question2cPage', () => {
  let component: Question2cPage;
  let fixture: ComponentFixture<Question2cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
