import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private _router = inject(Router);

  search(pokemonName: string):void {
    pokemonName = pokemonName.toLocaleLowerCase();
    console.log(pokemonName);
    this._router.navigate(['pokemonDetail', pokemonName]);
  }

}
