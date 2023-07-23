import { Expose, Transform } from "class-transformer";
import { IsString } from "class-validator";

class DatosUsuarioInputDTO {
    @Expose({ name: "mail" })
    @IsString()
    @Transform(({ value }) => {
        return (/\S+@\S+\.\S+/.test(value) || typeof value === "undefined")
            ? value
            : (() => { throw new Error(`El parámetro "mail" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public correo;

    @Expose({ name: "phone" })
    @IsString()
    @Transform(({ value }) => {
        return (/^(?:\+\d{1,3}\s?)?\d{10}$/.test(value) || typeof value === "undefined")
            ? value
            : (() => { throw new Error(`El parámetro "phone" proporcionado no es válido, ingrese un número de teléfono válido`); })();
    }, { toClassOnly: true })
    public telefono;

    constructor(
        mail: string,
        phone: string,
    ) {
        this.correo = mail;
        this.telefono = phone;
    }
}
export default DatosUsuarioInputDTO;