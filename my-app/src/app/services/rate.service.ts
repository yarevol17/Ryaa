import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
    private readonly http: HttpClient
  ) { }

  rate(formdata: any, author: string) {
    return this.http.post(environment.serverURL + 'rate/' + author, formdata)
  }

  get_rate_by_user_id(user_id: string) {
    return this.http.get(environment.serverURL + 'rate/' + user_id)
  }
}
