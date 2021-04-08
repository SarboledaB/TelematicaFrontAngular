import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { ShowCarComponent } from './show-car/show-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCarComponent,
    ListCarComponent,
    ShowCarComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'list', component: ListCarComponent },
      { path: 'show', component: ShowCarComponent },
      { path: 'ejemplo', component: EjemploComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
