import { Evento } from '../evento/evento';
import { Ubicacion } from '../ubicacion/ubicacion';

export class Actividad{
    constructor(
        private idA: number,
        private nombreA: string,
        private horaInicioA: any,
        private horaFinA: any, 
        private detallesAdicionlesA: string, 
        private eventoA: Evento,
        private localizacionA: Ubicacion) { }

get id(): number { return this.idA; }
get nombre(): string { return this.nombreA; }
get horaInicio(): any { return this.horaInicioA; }
get horaFin(): any { return this.horaFinA; }
get detallesAdicionales(): string { return this.detallesAdicionlesA; }
get evento(): Evento { return this.eventoA; }
get localizacion(): Ubicacion { return this.localizacionA; }

}
