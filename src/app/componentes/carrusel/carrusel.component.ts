import { Component, OnInit } from '@angular/core';
import { Contencarrusel } from '../../models/modelos';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  public contenidoFotos: Array<Contencarrusel>;

  constructor() {
    this.contenidoFotos = [
      new Contencarrusel('Consigue tu página web', 'profesional.', 'bg8'),
      new Contencarrusel('Desarrollo a medida, y accesibles a todos los ', 'dipositivos.', 'bg7'),
      new Contencarrusel('Posiciono tu web en los motores de', 'busqueda.',  'bg6'),
    ];
   }

  ngOnInit() {
  }

}
