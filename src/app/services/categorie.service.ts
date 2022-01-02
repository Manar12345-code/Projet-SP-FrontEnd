import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categorie } from "../model/categorie.model";
import { AuthService } from "./auth.service";

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  } )
  };
  @Injectable({
    providedIn: 'root'
  })

export class CategorieService {
  apiURL: string = 'http://localhost:8080/vetements/api/categorie';
  categories: Categorie[]=[];
  constructor(private http : HttpClient , private authService:AuthService) {


  }

  listeCategorie():Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get(this.apiURL+"/all",{headers:httpHeaders}
);
   }
  ajouterCategorie(uni:Categorie):Observable<Categorie>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Categorie>(this.apiURL+"/", uni, {headers:httpHeaders});
   }

   supprimerCategorie( id:number){
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
    }


  consulterCategorie(id:number): Observable<Categorie>{
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Categorie>(url,{headers:httpHeaders});
    }
  get(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



    updateCategorie(etud:Categorie):Observable<Categorie>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Categorie>(this.apiURL+"/", etud, {headers:httpHeaders});
    }

}