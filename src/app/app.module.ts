import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCarsComponent } from './pages/list-cars/list-cars.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCarComponent } from './pages/get-car/get-car.component';
import { DeleteCarComponent } from './pages/delete-car/delete-car.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCarComponent,
    ListCarsComponent,
    GetCarComponent,
    DeleteCarComponent,
    UpdateCarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
