import { Actividad } from '../actividad/actividad';

export class InvitadoEspecial{
    constructor(private idA: number, private nameA: string, private descripcionA: string,
        private retratoA: string, private detallesA: string, private actividadA: Actividad) { }

get id(): number { return this.idA; }
get name(): string { return this.nameA; }
get descripcion(): string { return this.descripcionA; }
get retrato(): string { return this.retratoA; }
get detalles(): string { return this.detallesA; }
get actividad(): Actividad { return this.actividadA; }

}
