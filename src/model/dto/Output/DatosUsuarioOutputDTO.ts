import { Expose } from "class-transformer";

class DatosUsuarioOutputDTO {
    @Expose({ name: "correo" })
    public mail;

    @Expose({ name: "telefono" })
    public phone;

    constructor(
        correo: string,
        telefono: string,
    ) {
        this.mail = correo;
        this.phone = telefono;
    }
}
export default DatosUsuarioOutputDTO;