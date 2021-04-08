import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { DeleteCarComponent } from './pages/delete-car/delete-car.component';
import { GetCarComponent } from './pages/get-car/get-car.component';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'create', component: CreateCarComponent},
  { path: 'list', component: ListCarsComponent},
  { path: 'get/:id', component: GetCarComponent},
  { path: 'delete', component: DeleteCarComponent},
  { path: 'update/:id', component: UpdateCarComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
