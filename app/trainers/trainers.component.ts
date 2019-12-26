import { Component, OnInit } from '@angular/core';
import {trainer} from './mock_trainer';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
 
  trainers=trainer;

  constructor() { }
  

  ngOnInit() {
  }

}
