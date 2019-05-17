import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2dPage } from './question2d.page';

describe('Question2dPage', () => {
  let component: Question2dPage;
  let fixture: ComponentFixture<Question2dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2dPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
