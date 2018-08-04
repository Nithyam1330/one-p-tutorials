import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// user defined components
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '404',
        component: NotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
