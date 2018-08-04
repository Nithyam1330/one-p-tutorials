import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OneService {
  angularCourses = [
    {
      id: 'ng_1',
      imageUrl: '../../../assets/angular.jpg',
      title: 'Angular',
      content: 'Our Angular Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_2',
      imageUrl: '../../../assets/angular.jpg',
      title: 'Angular',
      content: 'Our Angular Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_3',
      imageUrl: '../../../assets/angular.jpg',
      title: 'Angular',
      content: 'Our Angular Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_4',
      imageUrl: '../../../assets/angular.jpg',
      title: 'Angular',
      content: 'Our Angular Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    }
  ];
  constructor() { }

  angularCoursesObj = new BehaviorSubject<any[]>(this.angularCourses);

  $angularCourses = this.angularCoursesObj.asObservable();

  setAngularData(angularDataInput: any[]) {
    this.angularCourses = angularDataInput;
  }

}
