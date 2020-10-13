import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-listar',
  templateUrl: './evento-listar.component.html',
  styleUrls: ['./evento-listar.component.css']
})
export class EventoListarComponent implements OnInit {

  constructor(private eventoService: EventoService) { }
  private eventos: Array<Evento>;

  ngOnInit() {
    this.getEventos();
  }

  getEventos(): void{
    this.eventoService.getEventos()
      .subscribe(eventos => {
      this.eventos = eventos;
    });
  }

}

