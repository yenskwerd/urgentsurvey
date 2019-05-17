import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1aPage } from './question1a.page';

describe('Question1aPage', () => {
  let component: Question1aPage;
  let fixture: ComponentFixture<Question1aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
