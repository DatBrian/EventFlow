import { Expose } from "class-transformer";

class UsuarioOutputDTO {
    @Expose({ name: "nombre" })
    public name;

    @Expose({ name: 'correo' })
    public mail: string;

    @Expose({ name: 'telefono' })
    public phone: string;

    constructor(
        nombre: string,
        correo: string,
        telefono: string,
    ) {
        this.name = nombre;
        this.mail = correo;
        this.phone = telefono
    }
}
export default UsuarioOutputDTO;