import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getMajors() {
    return this.http.get(environment.serverURL + 'major')
  }

  getSubjectsByMajor(majorId: string) {
    return this.http.get(environment.serverURL + 'major/subject/' + majorId)
  }
  getSkillsByMajor(majorId: string) {
    return this.http.get(environment.serverURL + 'major/skill/' + majorId)
  }
}
