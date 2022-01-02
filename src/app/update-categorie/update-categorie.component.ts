import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../model/categorie.model';
@Component({
selector: 'app-update-categorie',
templateUrl: './update-categorie.component.html',
styles: []
})
export class UpdateCategorieComponent implements OnInit {
currentCategorie = new Categorie();
constructor(private activatedRoute: ActivatedRoute,
  private categorieService: CategorieService,
  private router :Router,

  
  ) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.categorieService.consulterCategorie(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentCategorie = prod; } ) ;

  } 
  updateCategorie()
{ //console.log(this.currentProduit);
  this.categorieService.updateCategorie(this.currentCategorie).subscribe(prod => {
    this.router.navigate(['categorie']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    
}
}