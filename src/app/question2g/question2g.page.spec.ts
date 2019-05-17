import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2gPage } from './question2g.page';

describe('Question2gPage', () => {
  let component: Question2gPage;
  let fixture: ComponentFixture<Question2gPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2gPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2gPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
