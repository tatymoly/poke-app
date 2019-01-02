import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pokemons/pokemons.module#PokemonsModule',
  },
  {
    path: 'pokemon',
    loadChildren: './pokedex/pokedex.module#PokedexModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
