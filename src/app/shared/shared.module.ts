import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonsService } from './services/pokemons.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [PokemonsService],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}
