import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2bPage } from './question2b.page';

describe('Question2bPage', () => {
  let component: Question2bPage;
  let fixture: ComponentFixture<Question2bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
