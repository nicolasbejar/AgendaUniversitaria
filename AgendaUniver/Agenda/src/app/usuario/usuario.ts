import { TIPO_USUARIO } from './TIPO_USUARIO.enum';
import { Evento } from '../evento/evento';
import { Pago } from '../pago/pago';
import { Ticket } from '../ticket/ticket';
import { Tarjeta } from '../tarjeta/tarjeta';

export class Usuario {
    constructor(private idA: number, private nameA: string, private nombreA: string,
        private contrasenaA: string, private calidadUsuarioA: TIPO_USUARIO, private numeroContactoA: String,
        private numeroIdentificacionA: String, private correoContactoA: String, private eventosA: Evento[],
        private pagosA: Pago[], private ticketsA: Ticket[], private tarjetasA: Tarjeta[]) { }

get id(): number { return this.idA; }
get name(): string { return this.nameA; }
get nombre(): string { return this.nombreA; }
get contrasena(): string { return this.contrasenaA; }
get calidadUsuario(): TIPO_USUARIO { return this.calidadUsuarioA; }
get numeroContacto(): String { return this.numeroContactoA; }
get numeroIdentificacion(): String { return this.numeroIdentificacionA; }
get correoContacto(): String { return this.correoContactoA; }
get eventos(): Evento[] { return this.eventosA; }
get pagos(): Pago[] { return this.pagosA; }
get tickets(): Ticket[] { return this.ticketsA; }
get tarjetas(): Tarjeta[] { return this.tarjetasA; }
}
