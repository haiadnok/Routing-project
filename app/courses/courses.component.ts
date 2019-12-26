import { Component, OnInit } from '@angular/core';
import{course} from './model.course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = course;

  constructor() { }

  ngOnInit() {
  }

}


