import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FourService {
  bootstrapCourses = [
    {
      id: 'ng_boot_1',
      imageUrl: '../../../assets/ngBootstrap.jpg',
      title: 'Bootstrap',
      content: 'Our Bootstrap Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_boot_2',
      imageUrl: '../../../assets/ngBootstrap.jpg',
      title: 'Bootstrap',
      content: 'Our Bootstrap Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_boot_3',
      imageUrl: '../../../assets/ngBootstrap.jpg',
      title: 'Bootstrap',
      content: 'Our Bootstrap Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_boot_4',
      imageUrl: '../../../assets/ngBootstrap.jpg',
      title: 'Bootstrap',
      content: 'Our Bootstrap Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    }
  ]
  constructor() { }

  bootstrapCoursesObj = new BehaviorSubject<any[]>(this.bootstrapCourses);

  $bootstrapCourses = this.bootstrapCoursesObj.asObservable();

  setBootstrapCourses(bootstrapCoursesInput: any[]) {
    this.bootstrapCourses = bootstrapCoursesInput;
  }
}
