import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {
  //animals : string[]; //un tableau de chînes de caractères
  //animals : string[]; //un tableau de chînes de caractères
  vetements!: Vetement[]; //un tableau de Produit
 //un tableau de Produit

  constructor(private vetementService: VetementService,private router :Router ,
     public authService : AuthService ) {

    }
ngOnInit(): void {
  this.vetementService.listeVetement().subscribe(prods => {
  console.log(prods);
  this.vetements = prods;
  });
  }

supprimerVetement(p: Vetement)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.vetementService.supprimerVetement(p.idVetement).subscribe(() => {
      console.log("vetement supprimé");
      this.SuprimerVetementDuTableau(p);
      });
      
    }
SuprimerVetementDuTableau(prod : Vetement) {
      this.vetements.forEach((cur, index) => {
      if(prod.idVetement=== cur.idVetement) {
      this.vetements.splice(index, 1);
      }
      });
      }

}
