import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(environment.serverURL + 'user')
  }

  getProfessors() {
    return this.http.get(environment.serverURL + 'professor')
  }

  creatUser(formdata: any) {
    return this.http.post(environment.serverURL + 'user/', formdata)
  }

  updateUser(email: string, formdata: any) {
    return this.http.put(environment.serverURL + 'user/id/' + email, formdata)
  }

  // getUserbyEmail(email: string) {
  //   return this.http.get(environment.serverURL + 'user/id', email)
  // }

}
