import { TestBed, async, ComponentFixture, getTestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ApiService } from './api.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: ApiService;
  let componentService: ApiService;
  beforeEach(async(() => {
    let injector;
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ApiService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    injector = getTestBed();
    apiService = injector.get(ApiService);

    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    // get test component from the fixture
    component = fixture.componentInstance;

    componentService = fixture.debugElement.injector.get(ApiService);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Welcome to Logistics!'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Logistics!');
  });
  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Logistics!');
  }));
  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([ApiService], (injectService: ApiService) => {
      expect(injectService).toBe(apiService);
    })
  );
  it('should display Export after clicking first tab', async(() => {
    const compiled = fixture.nativeElement;
    compiled.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('app-expdata')).toBeTruthy();
    });
  }));
  it('should display Import after clicking second tab', async(() => {
    const compiled = fixture.nativeElement;
    compiled.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('app-impdata')).toBeTruthy();
    });
  }));
  it('should display Allocation after clicking third tab', async(() => {
    const compiled = fixture.nativeElement;
    compiled.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('app-alldata')).toBeTruthy();
    });
  }));

});
