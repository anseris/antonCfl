import { Component, OnInit } from '@angular/core';
import { Tecnologias } from '../../models/modelos';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  public tecnologiasList: Array<Tecnologias>;

  constructor() {
    this.tecnologiasList = [
      new Tecnologias('fab fa-html5', 'HTML 5', 'active', '75%', 'azul'),
      new Tecnologias('fab fa-css3-alt', 'CSS 3', '', '75%', 'fusia'),
      new Tecnologias('fab fa-angular', 'ANGULAR', '', '90%', 'salmon'),
      new Tecnologias('fab fa-js', 'Javascript', '', '90%', 'blanco'),
      new Tecnologias('fab fa-php', 'PHP', '', '60%', 'azul2')
    ];

   }

  ngOnInit() {
  }

}
