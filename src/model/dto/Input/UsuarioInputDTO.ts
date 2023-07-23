import { Expose, Transform } from "class-transformer";
import { IsNumberString, IsString } from "class-validator";

class UsuarioInputDTO {
    @Expose({ name: "name" })
    @IsString()
    @Transform(({ value }) => {
        return /^[A-Za-z ]{1,25}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "name" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public nombre: string;

    @Expose({ name: 'datos' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro datps proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_datos: number;

    constructor(
        name: string,
        datos: number,
    ) {
        this.nombre = name;
        this.id_datos = datos;
    }
}
export default UsuarioInputDTO;