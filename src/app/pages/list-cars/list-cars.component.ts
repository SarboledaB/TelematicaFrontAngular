import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styles: [
  ]
})
export class ListCarsComponent implements OnInit {

  cars:any;

  constructor(private carService:CarServiceService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(resp =>{
      this.cars = resp;
      console.log(resp);
    });
  }

}
