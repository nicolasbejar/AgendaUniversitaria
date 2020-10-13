import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{TicketListarComponent} from './ticket-listar/ticket-listar.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TicketListarComponent, TicketDetailComponent],
  exports:[TicketListarComponent],
})
export class TicketModule { }
