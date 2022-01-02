import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories!: Categorie[]; //un tableau de Produit
 //un tableau de Produit

  constructor(private categorieService: CategorieService,private router :Router  ,
    public authService : AuthService) { 
    
  }

  ngOnInit(): void {
    this.categorieService.listeCategorie().subscribe(prods => {
    console.log(prods);
    this.categories = prods;
    }
    
    );

}
supprimerCategorie(p: Categorie)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.categorieService.supprimerCategorie(p.idCat).subscribe(() => {
      console.log("catégorie supprimé");
      this.SuprimerCategorieDuTableau(p);
      });
      
    }
SuprimerCategorieDuTableau(prod : Categorie) {
      this.categories.forEach((cur, index) => {
      if(prod.idCat=== cur.idCat) {
      this.categories.splice(index, 1);
      }
      });
      }

}


