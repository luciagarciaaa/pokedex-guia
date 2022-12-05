/** Importamos los componentes */

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
/** Declaramos tres arrays, uno de las columnas donde tendremos la posicion, la imagen  el nombre, otro de los datos, los cuales usaremos de la api 
 * y por último el de los pokemons.
*/
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['position','image','name'];
  data: any[] = [];
  dataSource=new MatTableDataSource<any>(this.data);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  


/** En el construtor tendremos el servicio pokemon y el router*/
  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(){
    let pokemonData;
    for(let i=1;i<=150;i++){
      this.pokeService.getPokemons(i).subscribe(
        res=>{
          pokemonData={
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };
        this.data.push(pokemonData);
        this.dataSource=new MatTableDataSource<any>(this.data);
        this.dataSource.paginator=this.paginator;

          console.log(res);
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: { position: any; }){
  this.router.navigateByUrl(`pokeDetail/${row.position}`);
  }
}
