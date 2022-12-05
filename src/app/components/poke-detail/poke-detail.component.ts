/** Importamos los componentes*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
/** Aqui declaramos las variables que utilizaremos en la carta y le daremos acceso a la informacion a traves de una ruta*/
export class PokeDetailComponent implements OnInit {

  pokemon: any="";
  pokemonType=[];
  pokemonImg="";

  constructor(private pokemonService: PokemonService, 
    private activatedRouter: ActivatedRoute) {
      this.activatedRouter.params.subscribe(
        params=>{
          this.getPokemon(params['id']);
        }
      );
     }

  ngOnInit(): void {
  }

  getPokemon(id: any){
    this.pokemonService.getPokemons(id).subscribe(
      res=>{
        this.pokemon=res;
        this.pokemonImg=this.pokemon.sprites.front_default;
        this.pokemonType=res.types[0].type.name;
      },
      err=>{
        console.log(err);
      }
    );
  }
}
