import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private router: Router) {} // Injectez le Router dans le constructeur

  // Méthode pour rediriger vers Signup
  navigateToSignup(): void {
    this.router.navigate(['/register']); // Navigue vers la route '/register'
  }

  // Méthode pour rediriger vers Login
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Navigue vers la route '/login'
  }}