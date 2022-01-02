import { VetementService } from './../services/vetement.service';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {

  vetements! : Vetement[];
  categories!: Categorie[];
  idCat!: number;
  categorieList:any = [];

  constructor(private vetementService: VetementService,private  categorieService : CategorieService ,
    public authService : AuthService) {

   }

  ngOnInit(): void {
    this.vetementService.listeVetement().subscribe(res => {
      this.vetements = res;
    });
    this.categorieService.listeCategorie().subscribe(response =>{
      console.log(response)
      this.categorieList = response;


  });
}

  onChange() {
    this.vetements = this.vetementService.rechercherParCategorie(this.idCat)
    console.log(this.vetements)
    }

    supprimerVetement(e:Vetement){

        let conf = confirm("Etes-vous sûr ?");
          if (conf)
        this.vetementService.supprimerVetement(e.idVetement).subscribe(()=>{
        this.SuprimerVetementDuTableau(e);
        });
      }
      SuprimerVetementDuTableau(etud : Vetement) {
        this.vetements.forEach((cur: { idVetement: number; }, index: any) => {
        if(etud.idVetement=== cur.idVetement) {
        this.vetements.splice(index, 1);
        }
        });
        }
}