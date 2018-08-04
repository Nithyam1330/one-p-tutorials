import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ThreeService {
  ionicCourses = [
    {
      id: 'ionic_1',
      imageUrl: '../../../assets/ionic2.jpg',
      title: 'Ionic',
      content: 'Our Ionic Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ionic_2',
      imageUrl: '../../../assets/ionic2.jpg',
      title: 'Ionic',
      content: 'Our Ionic Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ionic_3',
      imageUrl: '../../../assets/ionic2.jpg',
      title: 'Ionic',
      content: 'Our Ionic Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ionic_4',
      imageUrl: '../../../assets/ionic2.jpg',
      title: 'Ionic',
      content: 'Our Ionic Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    }
  ]
  constructor() { }

  ionicCoursesObj = new BehaviorSubject<any[]>(this.ionicCourses);

  $ionicCourses = this.ionicCoursesObj.asObservable();

  setIonicCourses(ionicCourseInput: any[]) {
    this.ionicCourses = ionicCourseInput;
  }
}
