import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import {BloggerComponent} from '../common/blogger/blogger.component';

import { OneService } from './one/one.service';
import { TwoService } from './two/two.service';
import { ThreeService } from './three/three.service';
import { FourService } from './four/four.service';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  declarations: [
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    BloggerComponent
  ],
  providers: [
    OneService,
    TwoService,
    ThreeService,
    FourService
  ]
})
export class CoursesModule { }
