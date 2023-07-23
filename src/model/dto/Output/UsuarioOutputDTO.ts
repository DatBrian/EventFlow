import { Expose } from "class-transformer";

class UsuarioOutputDTO {
    @Expose({ name: "nombre" })
    public name;

    @Expose({ name: 'id_datos' })
    public id_datos: number;

    constructor(
        nombre: string,
        id_datos: number,
    ) {
        this.name = nombre;
        this.id_datos = id_datos;
    }
}
export default UsuarioOutputDTO;