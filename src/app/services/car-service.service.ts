import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CarI } from '../models/car.interface';
import { Observable } from 'rxjs';
import { ResponseI } from '../models/response.interface';

const apiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private httpClient: HttpClient) { }

  getCars() {
      let a =this.httpClient.get(`${apiUrl}/api/v1/cars/`);
      a.subscribe(res => {
        console.log(res);
        
      });
      
      return a;
  }

  saveCar(car:CarI): Observable<ResponseI> { 
    return this.httpClient.post<ResponseI>(`${apiUrl}`, car);
  }
}
