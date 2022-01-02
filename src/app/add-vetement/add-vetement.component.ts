import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();
 categorieList:any = [];



  constructor(private vetementService: VetementService,private router :Router,
    private categorieService : CategorieService) {

   }

  ngOnInit(): void {
    this.onSelectCat();
  }
 addVetement(){

  this.vetementService.ajouterVetement(this.newVetement)
  .subscribe(prod => {
  console.log(prod);
  });
  this.ngOnInit();
  this.router.navigate(['vetement']).then(()=>
  window.location.reload());
 }

 onSelectCat(){
  this.categorieService.listeCategorie().subscribe(response =>{
    console.log(response)
    this.categorieList = response;

  });
}

}