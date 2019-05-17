import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3cPage } from './question3c.page';

describe('Question3cPage', () => {
  let component: Question3cPage;
  let fixture: ComponentFixture<Question3cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
