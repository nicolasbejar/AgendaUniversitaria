import { Evento } from '../evento/evento';
export class Resena {
    constructor(private idA: number, private comentarioA: string,
        private calificacionA: number, private eventoA: Evento) { }

get id(): number { return this.idA; }
get comentario(): string { return this.comentarioA; }
get calificacion(): number { return this.calificacionA; }
get evento(): Evento { return this.eventoA; }
}
