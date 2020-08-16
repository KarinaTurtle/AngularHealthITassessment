import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './HealthIT.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl =
    'https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv';

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}
