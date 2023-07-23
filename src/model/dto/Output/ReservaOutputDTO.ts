import { Expose } from "class-transformer";

class ReservaOutputDTO {
    @Expose({ name: 'id_evento' })
    public evento: number;

    @Expose({ name: 'id_usuario' })
    public usuario: number;

    @Expose({ name: 'fecha' })
    public date: string;

    @Expose({ name: "id_estado" })
    public estado: number;

    @Expose({ name: 'entradas' })
    public tickets: number;

    constructor(
        id_evento: number,
        id_usuario: number,
        fecha: string,
        id_estado: number,
        entradas: number
    ) {
        this.evento = id_evento;
        this.usuario = id_usuario;
        this.date = fecha;
        this.estado = id_estado;
        this.tickets = entradas;
    }
}
export default ReservaOutputDTO;