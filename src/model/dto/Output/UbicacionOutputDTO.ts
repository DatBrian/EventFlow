import { Expose } from "class-transformer";

class UbicacionOutputDTO {
    @Expose({ name: "nombre" })
    public name;

    @Expose({ name: "direccion" })
    public address;

    @Expose({ name: 'capacidad' })
    public capacity: number;

    @Expose({ name: "descripcion" })
    public description: string;

    @Expose({ name: 'id_tipo_ubicacion' })
    public tipoUbicacion: number;

    constructor(
        nombre: string,
        direccion: string,
        capacidad: number,
        descripcion: string,
        id_tipo_ubicacion: number
    ) {
        this.name = nombre;
        this.address = direccion;
        this.capacity = capacidad;
        this.description = descripcion;
        this.tipoUbicacion = id_tipo_ubicacion;
    }
}
export default UbicacionOutputDTO;