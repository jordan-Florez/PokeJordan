import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent },
    //{path: 'test', component: PokemonDetailComponent},
    {path: 'pokemonDetail/:pokemonName', component: PokemonDetailComponent},
    {path: '**', component: HomeComponent}
];