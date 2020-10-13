import { Usuario } from '../usuario/usuario';
import { Pago } from '../pago/pago';


export class Ticket {

    constructor(
         private idA: number,
         private codigoQRA: string,
         private tokenA: string,
         private linkA: string,
         private registradoA: boolean,
         private usuarioA: Usuario,
         private pagoA: Pago) { }


    get id(): number { return this.idA; }
    get codigoQR(): string { return this.codigoQRA; }
    get token(): string { return this.tokenA; }
    get link(): string { return this.linkA; }
    get registrado(): boolean { return this.registradoA; }
    get usuario(): Usuario { return this.usuarioA; }
    get pago(): Pago { return this.pagoA; }
}