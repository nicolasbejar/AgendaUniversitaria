import { Ticket } from './ticket';
import { Usuario } from '../usuario/usuario';




export class TicketDetail extends Ticket{
    

    usuarios: Array<Usuario>;
}