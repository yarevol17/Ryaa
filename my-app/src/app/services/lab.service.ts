import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getLabs() {
    return this.http.get(environment.serverURL + 'lab')
  }

}
