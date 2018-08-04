import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CardDetailsService {
  cardsData = [
    {
      id:'one',
      imageUrl: '../../assets/angular.jpg',
      title: 'Angular',
      content: 'Our Angular Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course'
    },
    {
      id:'two',
      imageUrl: '../../assets/angularmaterial.jpg',
      title: 'Angular Material',
      content: 'Our Angular Material Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course'
    },
    {
      id:'three',
      imageUrl: '../../assets/ionic2.jpg',
      title: 'Ionic',
      content: 'Our Ionic Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course'
    },
    {
      id:'four',
      imageUrl: '../../assets/ngBootstrap.jpg',
      title: 'Bootstap',
      content: 'Our Bootstap Tutorials is designed for novice and skilful',
      buttonText: 'Start Your Course'
    }
  ];

  constructor() {
  }

  cardsObj = new BehaviorSubject<any[]>(this.cardsData);

  $cards = this.cardsObj.asObservable();

  setCardData(cardInput: any) {
    this.setCardData = cardInput;
  }
}
