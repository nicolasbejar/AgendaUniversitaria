import { TIPO_MULTIMEDIA } from './TIPO_MULTIMEDIA.enum';
import { Evento } from '../evento/evento';
export class ContenidoMultimedia {
    constructor(private idA: number, private nameA: string, private tipoMultimediaA: TIPO_MULTIMEDIA,
        private urlA: string, private memoriaA: boolean, private eventoMemoriasA: Evento,
        private eventoContenidosA: Evento) { }

get id(): number { return this.idA; }
get name(): string { return this.nameA; }
get tipoMultimedia(): TIPO_MULTIMEDIA { return this.tipoMultimediaA; }
get url(): string { return this.urlA; }
get memoria(): boolean { return this.memoriaA; }
get eventoMemorias(): Evento { return this.eventoMemoriasA; }
get eventoContenidos(): Evento { return this.eventoContenidosA; }
}
