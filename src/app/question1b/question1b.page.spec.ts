import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1bPage } from './question1b.page';

describe('Question1bPage', () => {
  let component: Question1bPage;
  let fixture: ComponentFixture<Question1bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
