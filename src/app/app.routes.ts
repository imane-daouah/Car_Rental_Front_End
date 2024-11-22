import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  
  //{ path: '', component: AppComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

