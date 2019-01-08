import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* SERVICIOS */
import { MessageService } from './services/message.service';


/* COMPONENTES */
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ComoTrabajoComponent } from './componentes/como-trabajo/como-trabajo.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarruselComponent,
    NosotrosComponent,
    ServiciosComponent,
    SeparadorComponent,
    ComoTrabajoComponent,
    TecnologiasComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
