import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  private url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http.get<any>(this.url + 'pokemon/', this.httpOptions).pipe(
      map(res => {
        return res;
      })
    );
  }

  getPokedex() {
    return this.http.get<any>(this.url + 'pokedex/2/', this.httpOptions).pipe(
      map(res => {
        return res['pokemon_entries'];
      })
    );
  }

  getPokemonDescription(n) {
    return this.http.get<any>(this.url + 'pokemon/' + n + '/').pipe(
      map(res => {
        return res;
      })
    );
  }
}
