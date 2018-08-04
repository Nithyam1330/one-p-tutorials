import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// user defined routing
import { SessionsRoutingModule } from './sessions-routing.module';

// user defined Components 
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

// user defined services 
import { SigninService } from '../../services/signin/signin.service';
import { RegisterService } from '../../services/register/register.service';
import { EmailVerificationService } from '../../services/email-verification/email-verification.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SessionsRoutingModule
  ],
  declarations: [
    SigninComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  providers: [
    SigninService,
    RegisterService,
    EmailVerificationService
  ]
})
export class SessionsModule { }
