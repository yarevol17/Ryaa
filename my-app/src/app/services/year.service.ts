import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getYears() {
    return this.http.get(environment.serverURL + 'year')
  }

  getClassByYear(yearId: string) {
    return this.http.get(environment.serverURL + 'class/' + yearId)
  }
}
