import { Component, OnInit } from '@angular/core';
import { OneService } from './one.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  cardDetails=[];
  constructor(public _oneService: OneService) { }

  ngOnInit() {
  	this._oneService.$angularCourses.subscribe(angularCourseResponse =>{
    console.log("in one service ts : "+ JSON.stringify(angularCourseResponse));
  		this.cardDetails=angularCourseResponse;
  	})
  }
}
