import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';
@Component({
selector: 'app-update-vetement',
templateUrl: './update-vetement.component.html',
styles: []
})


export class UpdateVetementComponent implements OnInit {
currentVetement = new Vetement();
categorieList: Categorie [] = [] ;
updatedCategorie! : Categorie;

constructor(private activatedRoute: ActivatedRoute,
  private vetementService: VetementService,
  private router :Router,
  public categorieService: CategorieService,

  
  ) { }
  ngOnInit():void {
    this.vetementService
    .consulterVetement(this.activatedRoute.snapshot.params['id'])
    .subscribe(
      (etud) => {
        console.log(etud);
        this.currentVetement = etud;
        this.updatedCategorie = etud.categorie;
      },
      (error) => {
        console.log(error);
      }
    );
    this.onSelectCat(this.currentVetement.idVetement)
  }
  updateVetement()
{console.log(this.currentVetement);
  this.updatedCategorie = this.vetementService.consulterCategorie(
      this.currentVetement.categorie.idCat
    );
    this.currentVetement.categorie = this.updatedCategorie;
    this.vetementService.updateVetement(this.currentVetement).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['vetement']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onSelectCat(id: number) {
    this.categorieService.listeCategorie().subscribe((response) => {
      console.log(response);
      this.categorieList = response;
    });
  }
}
