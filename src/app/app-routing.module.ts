import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthService } from '../services/common/auth/auth.service';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sessions/signin',
		pathMatch: 'full'
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'sessions',
				loadChildren: '../views/sessions/sessions.module#SessionsModule'
			}
		]
	},
	{
		path: '',
		// canActivate:[AuthService],
		component: AdminLayoutComponent,
		children: [
			{
				path: 'courses',
				loadChildren: '../views/courses/courses.module#CoursesModule'
			}
		]
	},
	{
		path: '**',
		redirectTo: 'sessions/404',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
