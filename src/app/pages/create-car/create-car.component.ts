import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CarI } from "../../models/car.interface";
import { CarServiceService } from "../../services/car-service.service";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styles: [
  ]
})
export class CreateCarComponent{

  carForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    commercial_value: new FormControl('', Validators.required),
    daily_rental_value: new FormControl('', Validators.required),
    available: new FormControl('', Validators.required),
  })

  constructor(private carService: CarServiceService ){ }

  createCar(form) {
    console.log(form);
    /* this.carService.saveCar(form).subscribe(resp => console.log(resp)); */
  }
    
}
