import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styles: [
  ]
})
export class GetCarComponent implements OnInit {

  car = {
    "id": 125,
    "brand": "FORD",
    "model": "FIESTA",
    "commercial_value": 5000000,
    "daily_rental_value": 100000,
    "available": 1,
    "created_at": "2021-04-08T07:50:26.846Z",
    "updated_at": "2021-04-08T07:50:26.846Z"
}

  constructor() { }

  ngOnInit(): void {
  }

  deleteCar(id){
    console.log(id);
    
  }

}
