import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  logist: Items[];
  apiUrl = 'https://run.mocky.io/v3/';

  constructor(private http: HttpClient) { }

  getExport() {
    const url = this.apiUrl + '8863d426-ad13-4a54-8934-140c7ac8a400';
    const httpObservable = this.http.get<{ logist: Items[] }>(url);
    return httpObservable;
  }
  getImport() {
    const url = this.apiUrl + '91144d14-cd24-4320-8f52-a241d6796b06';
    const httpObservable = this.http.get<{ logist: Items[] }>(url);
    return httpObservable;
  }
  getAlloc() {
    const url = this.apiUrl + '29f61067-b6bf-4c40-be49-4cb527001d94';
    const httpObservable = this.http.get<{ logist: Items[] }>(url);
    return httpObservable;
  }

}
