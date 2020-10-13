import { MetodoPago } from '../metodoPago/metodoPago';
import { Evento } from '../evento/evento';
import { Tarjeta } from '../tarjeta/tarjeta';
import { Usuario } from '../usuario/usuario';


export class Pago {

    constructor(private idA: number, private fechaPagoGeneradoA: string, private fechaPagoRealizadoA: string,
                private montoTotalA: number, private codigoA: string, private eventoA: Evento, 
                private metodoPagoA: MetodoPago, private usuarioA: Usuario, private tarjetaA: Tarjeta) {}

    get id(): number { return this.idA; }
    get fechaPagoGenerado(): string { return this.fechaPagoGeneradoA}
    get fechaPagoRealizado(): string { return this.fechaPagoRealizadoA}
    get montoTotal(): number { return this.montoTotalA}
    get codigo(): string { return this.codigoA}
    get evento(): Evento { return this.eventoA}
    get metodoPago(): MetodoPago { return this.metodoPagoA}
    get usuario(): Usuario { return this.usuarioA}
    get tarjeta(): Tarjeta { return this.tarjetaA}
}
