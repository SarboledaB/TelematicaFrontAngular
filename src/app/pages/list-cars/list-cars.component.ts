import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styles: [
  ]
})
export class ListCarsComponent implements OnInit {

  cars = [
    {
        "id": 2,
        "brand": "MAZDA",
        "model": "CX5",
        "commercial_value": 200000000,
        "daily_rental_value": 100000,
        "available": 1,
        "created_at": "2021-04-06T16:57:58.817Z",
        "updated_at": "2021-04-06T16:57:58.817Z"
    },
    {
        "id": 123,
        "brand": "MAZDA",
        "model": "CX5",
        "commercial_value": 200000000,
        "daily_rental_value": 100000,
        "available": 1,
        "created_at": "2021-04-08T08:44:01.046Z",
        "updated_at": "2021-04-08T08:44:01.046Z"
    },
    {
        "id": 124,
        "brand": "FORD",
        "model": null,
        "commercial_value": 5000000,
        "daily_rental_value": 100000,
        "available": 1,
        "created_at": "2021-04-08T07:49:40.739Z",
        "updated_at": "2021-04-08T07:49:40.739Z"
    },
    {
        "id": 125,
        "brand": "FORD",
        "model": "FIESTA",
        "commercial_value": 5000000,
        "daily_rental_value": 100000,
        "available": 1,
        "created_at": "2021-04-08T07:50:26.846Z",
        "updated_at": "2021-04-08T07:50:26.846Z"
    }
]

  constructor(private carService:CarServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(resp =>{
      console.log(resp);
    });
  }

}
