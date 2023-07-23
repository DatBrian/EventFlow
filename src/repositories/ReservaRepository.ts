import { RowDataPacket } from "mysql2/promise";
import QueriesCommon from "../common/QueriesCommon";
import ReservaInputDTO from "../model/dto/Input/ReservaInputDTO";
import ReservaOutputDTO from "../model/dto/Output/ReservaOutputDTO";
import { plainToClass } from "class-transformer";

class ReservaRepository extends QueriesCommon<ReservaInputDTO, ReservaOutputDTO>{

    constructor(
        private table = 'Reserva'
    ) {
        super();
    }

    protected mapRowToDTO(rows: RowDataPacket[]): ReservaOutputDTO[] {
        return rows.map((row) =>
            plainToClass(ReservaOutputDTO, row, { excludeExtraneousValues: true })
        );
    }

    //* Métodos CRUD

    public async getAllReservas(): Promise<ReservaOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, evento.nombre AS evento, usuario.nombre AS usuario, estado.nombre AS estado`,
            joins: `JOIN evento ON reserva.id_evento = evento.id
                    JOIN usuario ON reserva.id_usuario = usuario.id
                    JOIN estado_reserva AS estado ON reserva.id_estado = estado.id`,
            table: this.table,
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los Reservas:", error);
            throw new Error("Error al obtener los Reservas");
        }
    }

    public async getReservaById(id: any): Promise<ReservaOutputDTO | null> {
        const queryParams = {
            select: `${this.table}.*, evento.nombre AS evento, usuario.nombre AS usuario, estado.nombre AS estado`,
            joins: `JOIN evento ON reserva.id_evento = evento.id
                    JOIN usuario ON reserva.id_usuario = usuario.id
                    JOIN estado_reserva AS estado ON reserva.id_estado = estado.id`,
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.getOneById(id, queryParams);
        } catch (error) {
            console.error("Error al obtener los Reservas:", error);
            throw new Error("Error al obtener los Reservas");
        }
    }

    public async insertReserva(body: any): Promise<string> {
        const queryParams = {
            table: this.table
        };
        try {
            return await this.insert(body, queryParams);
        } catch (error) {
            console.error("Error al insertar el Reserva:", error);
            throw new Error("Error al insertar el Reserva");
        }
    }

    public async updateReserva(id: any, body: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.put(id, body, queryParams);
        } catch (error) {
            console.error("Error al actualizar el Reserva:", error);
            throw new Error("Error al actualizar el Reserva");
        }
    }

    public async deleteReserva(id: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.delete(queryParams);
        } catch (error) {
            console.error("Error al eliminar el Reserva:", error);
            throw new Error("Error al eliminar el Reserva");
        }
    }

    //* EndPoints Adicionales

    public async getUserReservations(id: any): Promise<ReservaOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, evento.nombre AS evento, usuario.nombre AS usuario, estado.nombre AS estado`,
            joins: `JOIN evento ON reserva.id_evento = evento.id
                    JOIN usuario ON reserva.id_usuario = usuario.id
                    JOIN estado_reserva AS estado ON reserva.id_estado = estado.id`,
            table: this.table,
            where: `WHERE id_usuario = ${id}`
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener las reservas de ese usuario:", error);
            throw new Error("Error al obtener las reservas de ese usuario");
        }
    }
}

export default ReservaRepository;
export const reservaRepository = new ReservaRepository();