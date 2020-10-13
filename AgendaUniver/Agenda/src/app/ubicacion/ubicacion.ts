import { Evento } from '../evento/evento';
import { Actividad } from '../actividad/actividad';

export class Ubicacion {
    constructor(private idA: number, private fechaHoraA: Date,
        private latitudA: number, private longitudA: number, private nombreLugarA: string,
        private ocupadoA: boolean, private eventoA: Evento,private actividadA: Actividad) { }

get id(): number { return this.idA; }
get fechaHora(): Date { return this.fechaHoraA; }
get latitud(): number { return this.latitudA; }
get longitud(): number { return this.longitudA; }
get nombreLugar(): string { return this.nombreLugarA; }
get ocupado(): boolean { return this.ocupadoA; }
get evento(): Evento { return this.eventoA; }
get actividad(): Actividad { return this.actividadA; }
}
