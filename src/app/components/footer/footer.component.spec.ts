
/** Importamos los componentes necesarios*/ 
/** El Testbed es una de las utilidades mas utilizadas para poder hacer pruebas en angular, 
* crea un modulo de prueba a partir angular -una clase @NgModule- que se configura con el 
* método configureTestingModule para producir el entorno del módulo para la clase que desea probar. */

import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
