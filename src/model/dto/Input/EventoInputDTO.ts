import { Expose, Transform } from "class-transformer";
import { IsNumberString, IsString } from "class-validator";

class EventoInputDTO {
    @Expose({ name: "description" })
    @IsString()
    @Transform(({ value }) => {
        return /^.{1,255}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "description" proporcionado no es válido, no puede exceder de los 255 caracteres`); })();
    }, { toClassOnly: true })
    public descripcion: string;

    @Expose({ name: 'capacity' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro capacity proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public cupos: number;

    @Expose({ name: 'fee' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro fee proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public tarifa: number;

    @Expose({ name: 'ubicacion' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro ubicacion proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_ubicacion: number;

    @Expose({ name: "date" })
    @IsString()
    @Transform(({ value }) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "date" proporcionado no es válido, ingrese una fecha válida (AAAA-MM-DD) >:(`); })();
    }, { toClassOnly: true })
    public fecha: string;

    @Expose({ name: 'category' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro category proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_categoria: number;

    constructor(
        description: string,
        capacity: number,
        fee: number,
        ubicacion: number,
        date: string,
        category: number
    ) {
        this.descripcion = description;
        this.cupos = capacity;
        this.tarifa = fee;
        this.id_ubicacion = ubicacion;
        this.fecha = date;
        this.id_categoria = category;
    }
}
export default EventoInputDTO;