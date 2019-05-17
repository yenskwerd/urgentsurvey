import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2hPage } from './question2h.page';

describe('Question2hPage', () => {
  let component: Question2hPage;
  let fixture: ComponentFixture<Question2hPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2hPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2hPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
