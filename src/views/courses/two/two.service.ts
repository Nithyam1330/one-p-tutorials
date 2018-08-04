import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TwoService {
  angularMaterialCourses = [
    {
      id: 'ng_mat_1',
      imageUrl: '../../../assets/angularmaterial.jpg',
      title: 'Angular Material',
      content: 'Our Angular Material Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_mat_2',
      imageUrl: '../../../assets/angularmaterial.jpg',
      title: 'Angular Material',
      content: 'Our Angular Material Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_mat_3',
      imageUrl: '../../../assets/angularmaterial.jpg',
      title: 'Angular Material',
      content: 'Our Angular Material Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    },
    {
      id: 'ng_mat_4',
      imageUrl: '../../../assets/angularmaterial.jpg',
      title: 'Angular Material',
      content: 'Our Angular Material Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course',
      buttonLink: 'https://www.google.com/'
    }
  ]
  constructor() { }

  angularMaterialCoursesObj = new BehaviorSubject<any[]>(this.angularMaterialCourses);

  $angularMaterialCourses = this.angularMaterialCoursesObj.asObservable();

  setAngularMaterialCourses(angularMaterialInput: any[]) {
    this.angularMaterialCourses = angularMaterialInput;
  }

}
