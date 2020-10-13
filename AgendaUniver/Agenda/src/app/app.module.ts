import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadModule} from './actividad/actividad.module';
import { InvitadoEspecialModule} from './invitadoEspecial/InvitadoEspecial.module';
import { TicketModule} from './ticket/ticket.module';
import { OrganizadorModule } from './organizador/organizador.module';
import { EventoModule } from './evento/evento.module';
import { ResenaModule } from './resena/resena.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { MetodoPagoModule } from './metodoPago/metodoPago.module';
import { PagoModule } from './pago/pago.module';
import { PatrocinadorModule } from './patrocinador/patrocinador.module';
import { ContenidoMultimediaModule } from './contenidoMultimedia/contenidoMultimedia.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';




@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ActividadModule,
      InvitadoEspecialModule,
      OrganizadorModule,
      EventoModule,
      TicketModule,
      UbicacionModule,
      ResenaModule,
      ContenidoMultimediaModule,
      UsuarioModule,
      MetodoPagoModule,
      PagoModule,
      PatrocinadorModule,
      ContenidoMultimediaModule,
      TarjetaModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

