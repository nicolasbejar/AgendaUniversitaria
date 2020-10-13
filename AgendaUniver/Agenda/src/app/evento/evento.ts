import { ContenidoMultimedia } from '../contenidoMultimedia/contenidoMultimedia';
import { Resena } from '../resena/resena';
import { Patrocinador } from '../patrocinador/patrocinador';
import { Organizador } from '../organizador/organizador';
import { Actividad } from '../actividad/actividad';
import { Usuario } from '../usuario/usuario';
import { Pago } from '../pago/pago';
import { Ubicacion } from '../ubicacion/ubicacion';


export class Evento {

    constructor(
        private idA: number, 
        private nombreA: string, 
        private descripcionA: string, 
        private imagenA: string, 
        private fechaInicioA: Date, 
        private fechaFinA: Date, 
        private capacidadMaximaA: number, 
        private entradasDisponiblesA: number, 
        private categoriaA: string, 
        private costoA: number, 
        private invitadoEspecialA: boolean, 
        private eventoPrivadoA: boolean, 
        private contenidosA: ContenidoMultimedia[],
        private resenasA: Resena [], 
        private patrocinadoresA: Patrocinador[], 
        private organizadoresA: Organizador[],
        private ubicacionA: Ubicacion,
        private actividadesA: Actividad [],
        private responsableA: Usuario,
        private pagosA: Pago [],

        private nomb: string) {}

    get id(): number { return this.idA; }
    get nombre(): string { return this.nombreA; }
    get descripcion(): string { return this.descripcionA; }
    get imagen(): string { return this.imagenA; }
    get fechaInicio(): Date { return this.fechaInicioA; }
    get fechaFin(): Date { return this.fechaFinA; }
    get capacidadMaxima(): number { return this.capacidadMaximaA; }
    get entradasDisponibles(): number { return this.entradasDisponiblesA; }
    get categoria(): string { return this.categoriaA; }
    get costo(): number { return this.costoA; }
    get invitadoEspecial(): boolean { return this.invitadoEspecialA; }
    get eventoPrivado(): boolean { return this.eventoPrivadoA; }
    get contenidos():  ContenidoMultimedia[] { return this.contenidosA; }
    get resenas(): Resena [] { return this.resenasA; }
    get patrocinadores():  Patrocinador[] { return this.patrocinadoresA; }
    get organizadores(): Organizador[] { return this.organizadoresA; }
    get ubicacion(): Ubicacion { return this.ubicacion; }
    get actividades():  Actividad [] { return this.actividadesA; }
    get responsable():  Usuario { return this.responsableA; }
    get pagos():  Pago [] { return this.pagosA; }


  }