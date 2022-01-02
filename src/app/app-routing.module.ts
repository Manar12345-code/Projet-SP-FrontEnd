import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VetementComponent } from './vetement/vetement.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { VetementGuard } from './vetement.guard';
import { CategorieGuard } from './categorie.guard';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';





const routes: Routes = [

  {path: "vetement", component : VetementComponent},
  {path: "add-vetement", component : AddVetementComponent, canActivate:[VetementGuard]},
  {path: "", redirectTo: "vetement", pathMatch: "full" },
  {path: "updateVetement/:id", component: UpdateVetementComponent ,canActivate:[VetementGuard] },
  {path: "categorie", component :  CategorieComponent},
  {path: "add-categorie", component : AddCategorieComponent, canActivate:[CategorieGuard]},
  {path: "", redirectTo: "categorie", pathMatch: "full" },
  {path: "updateCategorie/:id", component: UpdateCategorieComponent ,canActivate:[CategorieGuard]},
  {path:  'login', component: LoginComponent},
  {path:  'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
