import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { BindingComponent } from './binding/binding.component';



const routes: Routes = [
    {
        path : 'students',
        component : StudentComponent
    },
    {
        path : 'courses',
        component : CoursesComponent
    },
    {
        path : 'trainers',
        component : TrainersComponent
    },
    {
        path : "bindingExamples",
        component : BindingComponent
    },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
