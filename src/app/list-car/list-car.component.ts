import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../services/CarService/car-service.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {

  cars: any;

  constructor( private carServiceService : CarServiceService ) {
    console.log('hola');
    
   }

  ngOnInit(): void {
    this.listCars();
  }

  listCars(){
    this.carServiceService.getCars().then(data => {
      this.cars = JSON.stringify(data);
      console.log(this.cars);
      
    });
  }

}
