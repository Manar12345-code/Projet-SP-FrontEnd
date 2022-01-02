import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  newCategorie = new Categorie();
  message!: string;



constructor(private categorieService: CategorieService,private router :Router) {}
  ngOnInit() {
  }
  addCategorie(){
    this.categorieService.ajouterCategorie(this.newCategorie)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['categorie']);
    });
    
    }

}
