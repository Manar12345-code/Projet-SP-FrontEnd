import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from './categorie.service';
const httpOptions = {
headers: new HttpHeaders( {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*',
})
};
@Injectable({
  providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8080/vetements/api';
  vetements: Vetement[]=[];
  categories!: Categorie[];
  categorie= new Categorie();
  vetementsRecherche!: Vetement[];
 // etudiant?: Etudiant;
  constructor(private http : HttpClient , private authService:AuthService ,
    private categorieService : CategorieService ) {

    this.listeVetement().subscribe((response) => {
      console.log(response);
      this.vetements = response;
    });

    this.categorieService.listeCategorie().subscribe((response)=>{
      this.categories=response;
    });
   }

   listeVetement():Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get(this.apiURL,{headers:httpHeaders}
);
   }


   /*ngOnInit(): void {
    this.etudiantService.listeEtudiants().subscribe(etuds => {
    console.log(etuds);
    this.etudiants = etuds;
    });
    }*/

   ajouterVetement(etud:Vetement):Observable<Vetement>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Vetement>(this.apiURL, etud, {headers:httpHeaders});
   }

   listeCategories(): Categorie[] {
    return this.categories;
  }



  consulterCategorie(id: number): Categorie {
   this.categorie =  this.categories.find(cat =>cat.idCat === id) as Categorie;
    console.log(this.categorie);
    return this.categorie;
  }

   supprimerVetement( id:number){
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
    }


  consulterVetement(id:number): Observable<Vetement>{
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Vetement>(url,{headers:httpHeaders});
    }
  get(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



    updateVetement(etud:Vetement):Observable<Vetement>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Vetement>(this.apiURL, etud, {headers:httpHeaders});
    }

    rechercherParCategorie(idCat: number): Vetement[] {
      this.vetementsRecherche = [];
      this.vetements.forEach((cur, index) => {
        if (idCat == cur.categorie.idCat) {
          console.log('cur ' + cur);
          this.vetementsRecherche.push(cur);
        }
      });
      return this.vetementsRecherche;
    }



}