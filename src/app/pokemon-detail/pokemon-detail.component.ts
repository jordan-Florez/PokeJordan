import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from '../services/api-pokemon.service';
import { IPokemon } from '../models/product.model';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {

  private _routerActive = inject(ActivatedRoute);
  private _ApiPokemonService = inject(ApiPokemonService);
  public pokemon?:IPokemon;

  loading:boolean = true;

  ngOnInit(): void {
    this._routerActive.params.subscribe(params => {
      this._ApiPokemonService.getPokemon(params['pokemonName']).subscribe((data: IPokemon) => {
        this.pokemon = data;
        console.log(data);
        this.loading = false;
      });
    });
  }
    

}