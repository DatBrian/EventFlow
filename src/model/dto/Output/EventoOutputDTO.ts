import { Expose } from "class-transformer";

class EventoInputDTO {
    @Expose({ name: "descripcion" })
    public description: string;

    @Expose({ name: 'cupos' })
    public capacity: number;

    @Expose({ name: 'tarifa' })
    public fee: number;

    @Expose({ name: 'id_ubicacion' })
    public id_ubicacion: number;

    @Expose({ name: "fecha" })
    public date: string;

    @Expose({ name: 'id_categoria' })
    public category: number;

    constructor(
        descripcion: string,
        cupos: number,
        tarifa: number,
        id_ubicacion: number,
        fecha: string,
        id_categoria: number
    ) {
        this.description = descripcion;
        this.capacity = cupos;
        this.fee = tarifa;
        this.id_ubicacion = id_ubicacion;
        this.date = fecha;
        this.category = id_categoria;
    }
}
export default EventoInputDTO;