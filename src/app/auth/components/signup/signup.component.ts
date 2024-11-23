import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true, // Composant standalone
  imports: [ReactiveFormsModule, RouterModule], // Modules nécessaires
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  authService: any;
  router: any;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero_tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      userRole: ['USER', Validators.required],
      adresse: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      this.authService.registerUser(userData).subscribe(
        (response: any) => {
          console.log('Utilisateur créé avec succès', response);
          this.router.navigate(['/login']); // Redirige vers la page de connexion après succès
        },
        (error: any) => {
          console.error('Erreur lors de la création de l\'utilisateur', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}