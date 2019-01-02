import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonsService } from '../shared/services/pokemons.service';
import {
  MatCardModule,
  MatGridListModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PokedexRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [PokedexComponent],
  providers: [PokemonsService, HttpClient],
  exports: [PokedexComponent],
})
export class PokedexModule {}
