import { Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './pages/home/home.component'; // Importez le nouveau composant

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut avec HomeComponent
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];
