import { Expose } from "class-transformer";

class ReservaOutputDTO {
    @Expose({ name: 'evento' })
    public evento: string;

    @Expose({ name: 'usuario' })
    public usuario: string;

    @Expose({ name: 'fecha' })
    public date: string;

    @Expose({ name: "estado" })
    public estado: string;

    @Expose({ name: 'entradas' })
    public tickets: number;

    constructor(
        evento: string,
        usuario: string,
        fecha: string,
        estado: string,
        entradas: number
    ) {
        this.evento = evento;
        this.usuario = usuario;
        this.date = fecha;
        this.estado = estado;
        this.tickets = entradas;
    }
}
export default ReservaOutputDTO;