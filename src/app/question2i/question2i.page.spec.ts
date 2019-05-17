import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2iPage } from './question2i.page';

describe('Question2iPage', () => {
  let component: Question2iPage;
  let fixture: ComponentFixture<Question2iPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2iPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2iPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
