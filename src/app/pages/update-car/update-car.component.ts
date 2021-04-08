import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CarI } from "../../models/car.interface";
import { CarServiceService } from "../../services/car-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styles: [
  ]
})
export class UpdateCarComponent implements OnInit {

  car: any;

  carForm = new FormGroup({
    id: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    commercial_value: new FormControl('', Validators.required),
    daily_rental_value: new FormControl('', Validators.required),
    available: new FormControl('', Validators.required),
    
  })
  id: any;

  constructor(private rutaActiva: ActivatedRoute, private carService: CarServiceService, public router: Router) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params.id;
      }
    );
    this.getCar();
  }

  getCar(){
    this.carService.getCar(this.id).subscribe(resp =>{
      this.car = resp[0];
      console.log(resp);
    });
  }

  updateCar(){
    console.log(this.car);
    this.carService.updateCar(this.id, this.car).subscribe(resp =>{
      this.car = resp;
      console.log(resp);
      return this.router.navigate(['list']);
    });
  }

}
