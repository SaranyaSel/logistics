import {  TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {

  let httpTestingController: HttpTestingController;
  let apiService: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    });
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    apiService = TestBed.get(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const checkservice: ApiService = TestBed.get(ApiService);
    expect(checkservice).toBeTruthy();
  });

  it('returned Observable should match the right data Import ', () => {
    const mockup = [
      {
        ContainerNumber: 'ABC2049203',
        Size: 20
    },
    {
        ContainerNumber: 'DEF4124280',
        Size: 40
    }
    ];

    apiService.getImport()
      .subscribe(data => {
        expect(data[0].ContainerNumber).toEqual('ABC2049203');
        expect(data[0].Size).toEqual(
          20
        );

        expect(data[1].ContainerNumber).toEqual('DEF4124280');
        expect(data[1].Size).toEqual(
          40
        );
      });

    const req = httpTestingController.expectOne(
      'https://run.mocky.io/v3/91144d14-cd24-4320-8f52-a241d6796b06'
    );

    req.flush(mockup);
  });
  it('returned Observable should match the right data Export', () => {
    const mockup = [
      {
        ContainerNumber: 'MNQ9089414',
        Size: 40
    },
    {
        ContainerNumber: 'RST2413212',
        Size: 20
    }
    ];

    apiService.getExport()
      .subscribe(data => {
        expect(data[0].ContainerNumber).toEqual('MNQ9089414');
        expect(data[0].Size).toEqual(
          40
        );

        expect(data[1].ContainerNumber).toEqual('RST2413212');
        expect(data[1].Size).toEqual(
          20
        );
      });

    const req = httpTestingController.expectOne(
      'https://run.mocky.io/v3/8863d426-ad13-4a54-8934-140c7ac8a400'
    );

    req.flush(mockup);
  });

  it('returned Observable should match the right data of Allocation', () => {
    const mockup = [
      {
        ContainerNumber: 'POF9089414',
        Size: 40
    },
    {
        ContainerNumber: 'LKF2413214',
        Size: 20
    }
    ];

    apiService.getAlloc()
      .subscribe(data => {
        expect(data[0].ContainerNumber).toEqual('POF9089414');
        expect(data[0].Size).toEqual(
          40
        );

        expect(data[1].ContainerNumber).toEqual('LKF2413214');
        expect(data[1].Size).toEqual(
          20
        );
      });

    const req = httpTestingController.expectOne(
      'https://run.mocky.io/v3/29f61067-b6bf-4c40-be49-4cb527001d94'
    );

    req.flush(mockup);
  });
});
