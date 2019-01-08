import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/modelos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public elementosMenu: Array<Menu>;

  constructor() {
    this.elementosMenu = [
      new Menu('Inicio', '#inicio'),
      new Menu('Quien soy', '#nosotros'),
      new Menu('Servicios', '#servicios'),
      new Menu('Como trabajo', '#como'),
      new Menu('Tecnologias que uso', '#tecnologias'),
      new Menu('Contactame', '#contacto')
    ];

   }

  ngOnInit() {
  }

}


