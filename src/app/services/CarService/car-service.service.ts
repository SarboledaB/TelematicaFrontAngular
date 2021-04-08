import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${apiUrl}/api/v1/cars/`)
        .subscribe(resp => {
          resolve(resp);
        }, (err) => {
          reject(err);
        });
    });
  }
}
