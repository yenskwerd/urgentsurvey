import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3ePage } from './question3e.page';

describe('Question3ePage', () => {
  let component: Question3ePage;
  let fixture: ComponentFixture<Question3ePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3ePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3ePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
