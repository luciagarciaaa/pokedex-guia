/** Importamos el componente y dentro de el especificamos el selector,
 * la Url de la plantilla y la Url de los stylos */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/** Exportamos la clase principal AppComponent y le añadimos el titulo 
 * en este caso es pokeapi */
export class AppComponent {
  title = 'pokeapi';
}
