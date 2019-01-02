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
  pokemonData: any = {};
  abilityData: any = [];
  imgType: string;
  shiny: boolean;
  pokeImage: string;
  pokeImageBack: string;
  pokemonType;
  description;
  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonsService
  ) {}

  ngOnInit() {
    this.itemsId = this.route.snapshot.paramMap.get('name');
    this.getPokemonsDescription(this.itemsId);
  }
  getPokemonsDescription(n) {
    this.pokeService.getPokemonAbility(n).subscribe(response => {
      this.abilityData = response;
      console.log(this.abilityData);
      this.pokeImage = this.abilityData.sprites.front_default;
      this.pokeImageBack = this.abilityData.sprites.back_default;
      this.pokemonType = this.abilityData.types;
      this.pokeService
        .getPokemonDescription(this.abilityData.id)
        .subscribe(res => {
          this.pokemonData = res;
          console.log(this.pokemonData);
          this.description = this.pokemonData.flavor_text_entries[1].flavor_text;
        });
    });
  }

  imgViewType(type) {
    this.imgType = type;
    if (this.imgType === 'normal' && !this.shiny) {
      this.pokeImage = this.abilityData.sprites.front_default;
      this.pokeImageBack = this.abilityData.sprites.back_default;
    }
    if (this.imgType === 'animated' && !this.shiny) {
      this.pokeImage = `https://img.pokemondb.net/sprites/black-white/anim/normal/${
        this.abilityData.name
      }.gif`;
      this.pokeImageBack = `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${
        this.abilityData.name
      }.gif`;
    }
    if (this.imgType === 'normal' && this.shiny) {
      this.pokeImage = this.abilityData.sprites.front_shiny;
      this.pokeImageBack = this.abilityData.sprites.back_shiny;
    }
    if (this.imgType === 'animated' && this.shiny) {
      this.pokeImage = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${
        this.abilityData.name
      }.gif`;
      this.pokeImageBack = `https://img.pokemondb.net/sprites/black-white/anim/back-shiny/${
        this.abilityData.name
      }.gif`;
    }
  }
  shinyToggle(type) {
    this.shiny = !this.shiny;
    this.imgViewType(type);
  }
}
