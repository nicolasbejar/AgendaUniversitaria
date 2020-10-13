import { TIPO_PAGO } from './TIPO_PAGO.enum';

export class MetodoPago {

    constructor(private idA: number, private tipoPagoA: TIPO_PAGO, private imagenA: string, private descripcionA: string) { }

    get id(): number { return this.idA; }
    get imagen(): string { return this.imagenA; }
    get tipoPago(): TIPO_PAGO {return this.tipoPagoA;}
    get descripcion(): string { return this.descripcionA; }

}
