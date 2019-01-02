import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { PokemonsComponent } from './pokemons.component';
import { PokemonsService } from '../shared/services/pokemons.service';
import { HttpClient } from '@angular/common/http';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  MatCardModule,
  MatGridListModule,
  MatListModule,
} from '@angular/material';
@NgModule({
  imports: [
    ScrollingModule,
    CommonModule,
    PokemonsRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [PokemonsComponent],
  providers: [PokemonsService, HttpClient],
  exports: [PokemonsComponent],
})
export class PokemonsModule {}
