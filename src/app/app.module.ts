import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// Importez ou configurez vos routes ici
import { routes } from './app.routes';
 // Si vos routes sont dans app.routes.ts

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Assurez-vous que vos routes sont correctement définies ici
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
