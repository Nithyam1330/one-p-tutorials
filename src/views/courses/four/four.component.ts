import { Component, OnInit } from '@angular/core';
import { FourService } from './four.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
	cardDetails=[];

  constructor(public _fourService:FourService) { }

  ngOnInit() {
   	this._fourService.$bootstrapCourses.subscribe(bootstrapResp=>{
   		this.cardDetails=bootstrapResp;
   	})
  }

}
