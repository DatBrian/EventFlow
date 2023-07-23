import { Expose, Transform } from "class-transformer";
import { IsNumberString, IsString } from "class-validator";

class UbicacionInputDTO {
    @Expose({ name: "name" })
    @IsString()
    @Transform(({ value }) => {
        return /^[A-Za-z]{1,25}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "name" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public nombre;

    @Expose({ name: "address" })
    @IsString()
    @Transform(({ value }) => {
        return /^[A-Za-z]{1,25}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "address" proporcionado no es válido, solo pueden ser letras y no puede exceder de los 25 caracteres`); })();
    }, { toClassOnly: true })
    public direccion;

    @Expose({ name: 'capacity' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro capacity proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public capacidad: number;

    @Expose({ name: "description" })
    @IsString()
    @Transform(({ value }) => {
        return /^.{1,255}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "desciption" proporcionado no es válido, no puede exceder de los 255 caracteres`); })();
    }, { toClassOnly: true })
    public descripcion: string;

    @Expose({ name: 'tipoUbicacion' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro tipoUbicacion proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_tipo_ubicacion: number;

    constructor(
        name: string,
        address: string,
        capacity: number,
        description: string,
        tipoUbicacion: number
    ) {
        this.nombre = name;
        this.direccion = address;
        this.capacidad = capacity;
        this.descripcion = description;
        this.id_tipo_ubicacion = tipoUbicacion;
    }
}
export default UbicacionInputDTO;