import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons;

  constructor(private pokeService: PokemonsService) {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeService.getAllPokemons().subscribe(response => {
      this.pokemons = response.results;
    });
  }
}
