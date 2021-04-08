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
    return this.httpClient.post<ResponseI>(`${apiUrl}/api/v1/cars/`, car);
  }

  getCar(id): Observable<ResponseI> { 
    return this.httpClient.get<ResponseI>(`${apiUrl}/api/v1/cars/${id}`);
  }

  updateCar(id, car:CarI): Observable<ResponseI> { 
    return this.httpClient.put<ResponseI>(`${apiUrl}/api/v1/cars/${id}`, car);
  }

  deleteCar(id): Observable<ResponseI> { 
    return this.httpClient.delete<ResponseI>(`${apiUrl}/api/v1/cars/${id}`);
  }


}
