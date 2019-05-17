import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3bPage } from './question3b.page';

describe('Question3bPage', () => {
  let component: Question3bPage;
  let fixture: ComponentFixture<Question3bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
