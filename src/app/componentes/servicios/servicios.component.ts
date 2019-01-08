import { Component, OnInit } from '@angular/core';
import { ServiciosInfo } from '../../models/modelos';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public servicios: Array<ServiciosInfo>;

  constructor() {
    this.servicios = [
      new ServiciosInfo('Páginas Web', 'Dedarrollamos tu pagína web, modernas, dinamicas y a tu gusto', 'fas fa-laptop', ''),
      new ServiciosInfo('Webs coorporativas', 'Diseñamos y desarrollamos tu web para tu empresa, tus clientes y empleados', 'fas fa-globe', ''),
      new ServiciosInfo('Tienda online', 'Tu tienda online para que tu negocio incremente sus ventas', 'fas fa-shopping-cart', ''),
      new ServiciosInfo('Posicionamiento SEO', 'Posiciona tu web en los primeros lugares en los motores de búsqueda', 'fas fa-chart-line', '')
    ];

   }

  ngOnInit() {
  }

}
