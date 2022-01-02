import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementComponent } from './vetement/vetement.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    VetementComponent,
    AddVetementComponent,
    UpdateVetementComponent,
    CategorieComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
