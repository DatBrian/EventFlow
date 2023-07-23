import { Expose, Transform } from "class-transformer";
import { IsNumberString, IsString } from "class-validator";

class ReservaInputDTO {
    @Expose({ name: 'evento' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro evento proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_evento: number;

    @Expose({ name: 'usuario' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro usuario proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public id_usuario: number;

    @Expose({ name: 'date' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^\d{4}-\d{2}-\d{2}$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro date proporcionado no es un parámetro válido, ingrese una fecha válida >:("); })();
    }, { toClassOnly: true })
    public fecha: string;

    @Expose({ name: "estado" })
    @IsString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error(`El parámetro "estado" proporcionado no es válido, ingrese un número entero >:(`); })();
    }, { toClassOnly: true })
    public id_estado: number;

    @Expose({ name: 'tickets' })
    @IsNumberString()
    @Transform(({ value }) => {
        return /^[0-9]+$/.test(value)
            ? value
            : (() => { throw new Error("El parámetro tickets proporcionado no es un parámetro válido, ingrese un número entero >:("); })();
    }, { toClassOnly: true })
    public entradas: number;

    constructor(
        evento: number,
        usuario: number,
        date: string,
        estado: number,
        tickets: number
    ) {
        this.id_evento = evento;
        this.id_usuario = usuario;
        this.fecha = date;
        this.id_estado = estado;
        this.entradas = tickets;
    }
}
export default ReservaInputDTO;