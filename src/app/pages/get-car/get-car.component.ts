import { Component, OnInit } from '@angular/core';
import { CarServiceService } from "../../services/car-service.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styles: [
  ]
})
export class GetCarComponent implements OnInit {

  car: any;
  id: any;

  constructor(private rutaActiva: ActivatedRoute, private carService: CarServiceService, public router: Router) { }

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

  deleteCar(){
    this.carService.deleteCar(this.id).subscribe(resp =>{
      console.log(resp);
      return this.router.navigate(['list']);
    });
    
  }

}
