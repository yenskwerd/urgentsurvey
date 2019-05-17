import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3dPage } from './question3d.page';

describe('Question3dPage', () => {
  let component: Question3dPage;
  let fixture: ComponentFixture<Question3dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3dPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
