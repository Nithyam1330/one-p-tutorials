import { Component, OnInit } from '@angular/core';
import { TwoService } from './two.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
	cardDetails=[];
  constructor(public _twoService: TwoService) { }

  ngOnInit() {
  this._twoService.$angularMaterialCourses.subscribe(angularMaterialRes=>{
  	this.cardDetails=angularMaterialRes;
  })
  }

}
