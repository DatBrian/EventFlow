import { RowDataPacket } from "mysql2/promise";
import QueriesCommon from "../common/QueriesCommon";
import EventoInputDTO from "../model/dto/Input/EventoInputDTO";
import EventoOutputDTO from "../model/dto/Output/EventoOutputDTO";
import { plainToClass } from "class-transformer";

class EventoRepository extends QueriesCommon<EventoInputDTO, EventoOutputDTO>{

    constructor(
        private table = 'evento'
    ) {
        super();
    }

    //? Función requerida por MethodsCommon para pasar los objetos al dto

    protected mapRowToDTO(rows: RowDataPacket[]): EventoOutputDTO[] {
        return rows.map((row) =>
            plainToClass(EventoOutputDTO, row, { excludeExtraneousValues: true })
        );
    }

    //* Métodos CRUD

    public async getAllEventos(): Promise<EventoOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.nombre, categoria.nombre`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los Eventos:", error);
            throw new Error("Error al obtener los Eventos");
        }
    }

    public async getEventoById(id: any): Promise<EventoOutputDTO | null> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.nombre AS ubicacion, categoria.nombre AS categoria`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.getOneById(id, queryParams);
        } catch (error) {
            console.error("Error al obtener los Eventos:", error);
            throw new Error("Error al obtener los Eventos");
        }
    }

    public async insertEvento(body: any): Promise<string> {
        const queryParams = {
            table: this.table
        };
        try {
            return await this.insert(body, queryParams);
        } catch (error) {
            console.error("Error al insertar el Evento:", error);
            throw new Error("Error al insertar el Evento");
        }
    }

    public async updateEvento(id: any, body: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.put(id, body, queryParams);
        } catch (error) {
            console.error("Error al actualizar el Evento:", error);
            throw new Error("Error al actualizar el Evento");
        }
    }

    public async deleteEvento(id: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.delete(queryParams);
        } catch (error) {
            console.error("Error al eliminar el Evento:", error);
            throw new Error("Error al eliminar el Evento");
        }
    }

    //* EndPoints Adicionales

    public async getAllEventDetails(): Promise<EventoOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.*, ubicacion.nombre AS ubicacion, ubicacion.descripcion AS detalles_ubicacion, tipo_ubicacion.nombre AS tipo_ubicacion, categoria.nombre AS categoria`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN tipo_ubicacion ON ubicacion.id_tipo_ubicacion = tipo_ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los detalles de los eventos:", error);
            throw new Error("Error al obtener los detalles de los eventos");

        }
    }

    public async getEventDetails(id: any): Promise<EventoOutputDTO | null> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.*, ubicacion.nombre AS ubicacion, ubicacion.descripcion AS detalles_ubicacion, tipo_ubicacion.nombre AS tipo_ubicacion, categoria.nombre AS categoria`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN tipo_ubicacion ON ubicacion.id_tipo_ubicacion = tipo_ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.getOneById(id, queryParams)
        } catch (error) {
            console.error("Error al obtener los detalles del evento:", error);
            throw new Error("Error al obtener los detalles del evento");
        }
    }

    public async getEventsByUbication(ubication: any): Promise<EventoOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.nombre, categoria.nombre`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
            where: `WHERE ubicacion.nombre = '${ubication}'`
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los eventos de esa ubicación:", error);
            throw new Error("Error al obtener los eventos de esa ubicación");
        }
    }

    public async getEventsByCategory(category: any): Promise<EventoOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, ubicacion.nombre, categoria.nombre`,
            joins: `JOIN ubicacion ON evento.id_ubicacion = ubicacion.id
                    JOIN categoria_evento AS categoria ON evento.id_categoria = categoria.id`,
            table: this.table,
            where: `WHERE categoria.nombre = '${category}'`
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los eventos de esa categoría:", error);
            throw new Error("Error al obtener los eventos de esa categoría");
        }
    }
}

export default EventoRepository;
export const eventoRepository = new EventoRepository();