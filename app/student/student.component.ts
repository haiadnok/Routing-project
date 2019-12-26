import { Component, OnInit } from '@angular/core';
import {Students} from './mock_student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  students = Students;

  constructor() { }

  ngOnInit() {
  }

}
