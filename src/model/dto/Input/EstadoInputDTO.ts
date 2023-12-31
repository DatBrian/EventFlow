import { Expose, Transform } from "class-transformer";
import { IsString } from "class-validator";

class EstadoInputDTO {
    @Expose({ name: "name" })
    @IsString()
    @Transform(({ value }) => {
        return /^[A-Za-z]{1,25}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "name" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public nombre;

    @Expose({ name: "description" })
    @IsString()
    @Transform(({ value }) => {
        return /^.{1,255}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "description" proporcionado no es válido, no puede exceder de los 255 caracteres`); })();
    }, { toClassOnly: true })
    public descripcion;

    constructor(
        name: string,
        description: string,
    ) {
        this.nombre = name;
        this.descripcion = description;
    }
}
export default EstadoInputDTO;