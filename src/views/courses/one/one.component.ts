import { Component, OnInit } from '@angular/core';
import { OneService } from './one.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  cardDetails = [];
  constructor(public _oneService: OneService, private router: Router) { }

  ngOnInit() {
    this._oneService.$angularCourses.subscribe(angularCourseResponse => {
      this.cardDetails = angularCourseResponse;
    });
  }

  open(url) {
    this.router.navigate(['courses', 'blogger']);
  }
}
