import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdataComponent } from './expdata.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
describe('ExpdataComponent', () => {
  let component: ExpdataComponent;
  let fixture: ComponentFixture<ExpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpdataComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
