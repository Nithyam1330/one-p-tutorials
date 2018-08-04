import { Component, OnInit } from '@angular/core';
import { CardDetailsService } from '../../../services/common/cards/card-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardDetails: any[];
  constructor(public _cardsService: CardDetailsService) { }


  ngOnInit() {
    this._cardsService.$cards.subscribe(cardsResponse => {
      console.log("card details : " + JSON.stringify(cardsResponse));
      this.cardDetails = cardsResponse;
    })
  }
  }

