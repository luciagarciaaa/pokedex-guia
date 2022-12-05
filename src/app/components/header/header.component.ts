/** Importamos los componentes*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/** En la clase principal de este ficero es donde vamos a crear una ruta para que cuando pulsemos la imagen 
 * de arriba a la derecha nos lleve al inicio*/

export class HeaderComponent implements OnInit {
[x: string]: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

/** Declaramos el metodo home */
home(){
this.router.navigateByUrl('/home');
}
}
