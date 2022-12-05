
/** Importamos los componentes */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/** Aqui es donde vamos a conseguir la informacion procedente de la api*/
export class PokemonService {
  baseUrl=environment.baseUrl;
    constructor(private http: HttpClient) { }
    getPokemons(index:any){
      return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
    }
  }
    
