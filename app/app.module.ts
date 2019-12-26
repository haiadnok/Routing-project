import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './student/home.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ExponentPipe } from './exponent.pipe';
import { BindingComponent } from './binding/binding.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    CoursesComponent,
    TrainersComponent,
    ExponentPipe,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
