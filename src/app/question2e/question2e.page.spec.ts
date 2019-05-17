import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2ePage } from './question2e.page';

describe('Question2ePage', () => {
  let component: Question2ePage;
  let fixture: ComponentFixture<Question2ePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2ePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2ePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
