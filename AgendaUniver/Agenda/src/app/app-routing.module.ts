import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListarComponent } from './ticket/ticket-listar/ticket-listar.component';
import { OrganizadorListarComponent } from './organizador/organizador-listar/organizador-listar.component';
import { ActividadListarComponent } from './actividad/actividad-listar/actividad-listar.component';
import { ContenidoMultimediaListarComponent } from './contenidoMultimedia/contenidoMultimedia-listar/contenidoMultimedia-listar.component';
import { EventoListarComponent } from './evento/evento-listar/evento-listar.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { ResenaListarComponent } from './resena/resena-listar/resena-listar.component';
import { UbicacionListarComponent } from './ubicacion/ubicacion-listar/ubicacion-listar.component';
import { HomeComponent } from './home/home.component';
import { OrganizadorDetailComponent } from './organizador/organizador-detail/organizador-detail.component';
import { MetodoPagoListarComponent } from './metodoPago/metodoPago-listar/metodoPago-listar.component';
import { PagoListarComponent } from './pago/pago-listar/pago-listar.component';


const pagoRoute = {};
const organizadorRoute = {};

const routes: Routes = [

  
  { path: 'tickets', children:[{path: 'list',component: TicketListarComponent}]},{path: ':id',component: TicketDetailComponent},
  { path: 'organizadores', children:[{path: 'list', component: OrganizadorListarComponent}]},{path: ':id',component: OrganizadorDetailComponent},
  { path: 'actividades', children: [{ path: 'list', component: ActividadListarComponent }] },
  { path: 'contenidosMultimedia', children: [{ path: 'list', component: ContenidoMultimediaListarComponent }] },
  { path: 'eventos', children: [{ path: 'list', component: EventoListarComponent }] },
  { path: 'resenas', children: [{ path: 'list', component: ResenaListarComponent }] },
  { path: 'ubicaciones', children: [{ path: 'list', component: UbicacionListarComponent }] },
  { path: 'metodosPago', children: [{ path: 'list', component: MetodoPagoListarComponent }] },
  { path: 'pagos', children: [{ path: 'list', component: PagoListarComponent }] },
  {
    path: 'home', 
    component: HomeComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
