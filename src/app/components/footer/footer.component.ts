/** Importamos los componentes necesarios y añadimos los elementos necesarios,como el selector,
 * la url de la plantilla y la url de los estilos.
 * En este caso la clase principal del ficero implementa la interfaz OnInit y se encuentra vacia porque
 *  no la hemos necesitado para nuestra aplicacion
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
