/** Importamos los componentes*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

/** Con las siguientes lineas declaramos las rutas hacia el inicio, la tabla donde se almacenan los pokemons y sus detalles*/
const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail/:id',component: PokeDetailComponent},
  {path: '',pathMatch: 'full',redirectTo: 'home'},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
