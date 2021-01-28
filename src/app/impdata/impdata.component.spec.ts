import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpdataComponent } from './impdata.component';

describe('ImpdataComponent', () => {
  let component: ImpdataComponent;
  let fixture: ComponentFixture<ImpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create the app', async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

});
