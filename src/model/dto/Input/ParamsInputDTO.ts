import { Expose, Transform } from "class-transformer";
import { IsNumber } from "class-validator";

class ParamsInputDTO {
    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value) || typeof value === "undefined"
            ? value
            : (() => { throw new Error("El id proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    @IsNumber()
    public id: number;

    constructor(
        id: number
    ) {
        this.id = id;
    }
}
export default ParamsInputDTO;