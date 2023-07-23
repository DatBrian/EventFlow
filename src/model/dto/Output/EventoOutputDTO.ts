import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";

class EventoInputDTO {
    @Expose({ name: "descripcion" })
    public description: string;

    @Expose({ name: 'cupos' })
    public capacity: number;

    @Expose({ name: 'tarifa' })
    public fee: number;

    @Expose({ name: 'ubicacion' })
    public ubicacion: string;

    @Expose({ name: 'direccion' })
    @IsOptional()
    public address: string;

    @Expose({ name: 'detalles_ubicacion' })
    @IsOptional()
    public detalles_ubicacion: string;

    @Expose({ name: "fecha" })
    public date: string;

    @Expose({ name: 'categoria' })
    public category: number;

    constructor(
        descripcion: string,
        cupos: number,
        tarifa: number,
        ubicacion: string,
        direccion: string,
        detalles_ubicacion: string,
        fecha: string,
        categoria: number
    ) {
        this.description = descripcion;
        this.capacity = cupos;
        this.fee = tarifa;
        this.ubicacion = ubicacion;
        this.address = direccion;
        this.detalles_ubicacion = detalles_ubicacion;
        this.date = fecha;
        this.category = categoria;
    }
}
export default EventoInputDTO;