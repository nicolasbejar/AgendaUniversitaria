import { Usuario } from '../usuario/usuario';
import { Pago } from '../pago/pago';
import {TIPO_TARJETA} from './TIPO_TARJETA.enum'


export class Tarjeta {

    constructor(
        private idA: number,
        private nombreTitularA: string,
        private numeroA: string,
        private tipoTarjetaA: TIPO_TARJETA,
        private usuarioA: Usuario,
        private pagoA: Pago[]) { }


    get id(): number { return this.idA; }
    get nombreTitular(): string { return this.nombreTitularA; }
    get numero(): string { return this.numero; }
    get tipoTarjeta(): TIPO_TARJETA { return this.tipoTarjetaA; }
    get usuario(): Usuario { return this.usuarioA; }
    get pago(): Pago[] { return this.pagoA; }
}