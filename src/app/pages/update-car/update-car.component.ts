import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {

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

  carForm = new FormGroup({
    brand: new FormControl(this.car.brand, Validators.required),
    model: new FormControl(this.car.model, Validators.required),
    commercial_value: new FormControl(this.car.commercial_value, Validators.required),
    daily_rental_value: new FormControl(this.car.daily_rental_value, Validators.required),
    available: new FormControl(this.car.available, Validators.required),
    
  })

  constructor() { }

  ngOnInit(): void {
  }

  updateCar(form){
    console.log(form); 
  }

}
