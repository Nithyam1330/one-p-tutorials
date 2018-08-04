import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from '../profile/profile.component';


import { CardDetailsService } from '../../services/common/cards/card-details.service';
import { OneService } from '../courses/one/one.service';
import { TwoService } from '../courses/two/two.service';
import { ThreeService } from '../courses/three/three.service';
import { FourService } from '../courses/four/four.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  providers:[
    OneService,
    TwoService,
    ThreeService,
    FourService,
    NgbDropdownConfig
  ]
})
export class TopbarComponent implements OnInit {
  cardDetails = [];

  constructor(public _cardDetailsService: CardDetailsService,
    public route: Router,
    public config: NgbDropdownConfig,
    public _oneService: OneService) {
    config.placement = 'bottom-right';
    config.autoClose = "outside";
  }

goToPage(item){
  this.route.navigate(['courses',item.id]);
}
  ngOnInit() {
    this._cardDetailsService.$cards.subscribe(cardsData => {
      this.cardDetails = cardsData;
    })
  }

}
