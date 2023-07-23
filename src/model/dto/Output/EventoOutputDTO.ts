import { Expose } from "class-transformer";

class EventoInputDTO {
    @Expose({ name: "descripcion" })
    public description: string;

    @Expose({ name: 'cupos' })
    public capacity: number;

    @Expose({ name: 'tarifa' })
    public fee: number;

    @Expose({ name: 'ubicacion' })
    public ubicacion: number;

    @Expose({ name: "fecha" })
    public date: string;

    @Expose({ name: 'categoria' })
    public category: number;

    constructor(
        descripcion: string,
        cupos: number,
        tarifa: number,
        ubicacion: number,
        fecha: string,
        categoria: number
    ) {
        this.description = descripcion;
        this.capacity = cupos;
        this.fee = tarifa;
        this.ubicacion = ubicacion;
        this.date = fecha;
        this.category = categoria;
    }
}
export default EventoInputDTO;