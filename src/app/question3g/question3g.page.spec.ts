import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3gPage } from './question3g.page';

describe('Question3gPage', () => {
  let component: Question3gPage;
  let fixture: ComponentFixture<Question3gPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3gPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3gPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
