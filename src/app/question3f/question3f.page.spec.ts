import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3fPage } from './question3f.page';

describe('Question3fPage', () => {
  let component: Question3fPage;
  let fixture: ComponentFixture<Question3fPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3fPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3fPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
