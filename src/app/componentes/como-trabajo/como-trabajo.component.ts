import { Component, OnInit } from '@angular/core';
import { Pasos } from '../../models/modelos';

@Component({
  selector: 'app-como-trabajo',
  templateUrl: './como-trabajo.component.html',
  styleUrls: ['./como-trabajo.component.css']
})
export class ComoTrabajoComponent implements OnInit {

  public pasos: Array<Pasos>;

  constructor() {
    this.pasos = [
      new Pasos('1', 'Contactame', 'Contacta conmigo por medio del formulario de contacto, o por teléfono.'),
      new Pasos('2', 'Primera toma de contacto', 'Me pondré en contacto con el cliente para que me explique por encima su proyecto.'),
      new Pasos('3', 'Me reuniré con el cliente', 'En esta primera reunión, les llevaré unos diseños acordes con la información proporcionada en el paso 2, a su vez les llevaré el presupuesto detallado.'),
      new Pasos('4', 'Comienzo del desarrollo', 'En el caso, de que el presupuesto sea aceptado, comenzaré con el desarrollo del proyecto.'),
      new Pasos('5', 'Mejoras y cambios', 'Una vez que el desarrollo esté casi finalizado, me reuno con el cliente, enseñandole el trabajo casi terminado, en este punto, el cliente podra hacer pequeños cambios o mejoras.'),
      new Pasos('6', 'Finalización del trabajo', 'Se mostrará al cliente el resultado final, y se  procederá al pago del servicio.') 
    ];

   }

  ngOnInit() {
  }

}
