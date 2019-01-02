import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../shared/services/pokemons.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  itemsId;
  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonsService
  ) {}

  ngOnInit() {
    this.itemsId = this.route.snapshot.paramMap.get('name');
    console.log(this.itemsId);
    this.getPokemonsDescription(this.itemsId);
  }
  getPokemonsDescription(n) {
    this.pokeService.getPokemonDescription(n).subscribe(response => {
      console.log(response);
    });
  }
}
