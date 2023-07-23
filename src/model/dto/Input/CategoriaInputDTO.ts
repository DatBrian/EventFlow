import { Expose, Transform } from "class-transformer";
import { IsString } from "class-validator";

class CategoriaInputDTO {
    @Expose({ name: "name" })
    @IsString()
    @Transform(({ value }) => {
        return /^[A-Za-z ]{1,25}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "name" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public nombre: string;

    @Expose({ name: "description" })
    @IsString()
    @Transform(({ value }) => {
        return /^.{1,255}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "desciption" proporcionado no es válido, no puede exceder de los 255 caracteres`); })();
    }, { toClassOnly: true })
    public descripcion: string;

    constructor(
        name: string,
        description: string,
    ) {
        this.nombre = name;
        this.descripcion = description;
    }
}
export default CategoriaInputDTO;