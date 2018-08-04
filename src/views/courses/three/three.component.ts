import { Component, OnInit } from '@angular/core';
import { ThreeService } from './three.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
	cardDetails=[];
  constructor(public _threeService:ThreeService) { }

  ngOnInit() {
  this._threeService.$ionicCourses.subscribe(ionicResponse=>{
  	this.cardDetails=ionicResponse;
  })
  }

}
