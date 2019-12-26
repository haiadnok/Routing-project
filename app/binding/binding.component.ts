import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  currentCount : number = 0;

  increment () {
    this.currentCount++;
  };
  decrement () {
    this.currentCount--;
  }

  entername : boolean = true ;

  kkk : boolean = false;

  kk (){
    this.kkk = true;
  }
  visible : boolean = false ;
  onclickme () {
    this.visible = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
