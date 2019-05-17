import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2fPage } from './question2f.page';

describe('Question2fPage', () => {
  let component: Question2fPage;
  let fixture: ComponentFixture<Question2fPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2fPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2fPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
