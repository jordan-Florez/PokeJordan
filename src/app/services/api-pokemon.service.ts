import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {


  private _http = inject(HttpClient);
  private urlBase:string = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(pokemonName:string):Observable<IPokemon>{
    return this._http.get<IPokemon>(`${this.urlBase}/${pokemonName}`)
  }

}