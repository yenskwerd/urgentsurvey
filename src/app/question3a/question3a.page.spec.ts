import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3aPage } from './question3a.page';

describe('Question3aPage', () => {
  let component: Question3aPage;
  let fixture: ComponentFixture<Question3aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
