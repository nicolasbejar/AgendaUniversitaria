import { Evento } from '../evento/evento';

export class Patrocinador{
    constructor(
        private idA: number,
        private nombreA: string,
        private imagenA: string,
        private correoContactoA: string, 
        private numeroContactoA: string, 
        private eventoA: Evento) { }

get id(): number { return this.idA; }
get nombre(): string { return this.nombreA; }
get imagen(): string { return this.imagenA; }
get correoContacto(): string { return this.correoContactoA; }
get numeroContacto(): string { return this.numeroContactoA; }
get evento(): Evento { return this.eventoA; }

}