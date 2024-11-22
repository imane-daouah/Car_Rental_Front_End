
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import des modules NgZorro nécessaires
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    // Vos composants ici
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule,   // Pour nz-spin
    NzFormModule,   // Pour nz-form-item et nz-form-control
    NzInputModule,  // Pour nz-input
    NzButtonModule,
     // Pour le bouton
  ],
  providers: [],
  bootstrap: [/* Composant principal ici */],
})
export class AppModule {}
