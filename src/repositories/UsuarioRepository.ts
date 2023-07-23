import { RowDataPacket } from "mysql2/promise";
import QueriesCommon from "../common/QueriesCommon";
import UsuarioInputDTO from "../model/dto/Input/UsuarioInputDTO";
import UsuarioOutputDTO from "../model/dto/Output/UsuarioOutputDTO";
import { plainToClass } from "class-transformer";

class UsuarioRepository extends QueriesCommon<UsuarioInputDTO, UsuarioOutputDTO>{

    constructor(
        public table = 'usuario'
    ) {
        super();
    }

    protected mapRowToDTO(rows: RowDataPacket[]): UsuarioOutputDTO[] {
        return rows.map((row) =>
            plainToClass(UsuarioOutputDTO, row, { excludeExtraneousValues: true })
        );
    }

    public async getAllUsuarios(): Promise<UsuarioOutputDTO[]> {
        const queryParams = {
            select: `${this.table}.*, datos_usuario.correo, datos_usuario.telefono`,
            joins: `JOIN datos_usuario ON usuario.id_datos = datos_usuario.id`,
            table: this.table
        };
        try {
            return await this.getAll(queryParams);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            throw new Error("Error al obtener los usuarios");
        }
    }

    public async getUsuarioById(id: any): Promise<UsuarioOutputDTO | null> {
        const queryParams = {
            select: `${this.table}.*, datos_usuario.correo, datos_usuario.telefono`,
            joins: `JOIN datos_usuario ON usuario.id_datos = datos_usuario.id`,
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.getOneById(id, queryParams);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            throw new Error("Error al obtener los usuarios");
        }
    }

    public async insertUsuario(body: any): Promise<string> {
        const queryParams = {
            table: this.table
        };
        try {
            return await this.insert(body, queryParams);
        } catch (error) {
            console.error("Error al insertar el usuario:", error);
            throw new Error("Error al insertar el usuario");
        }
    }

    public async updateUsuario(id: any, body: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.put(id, body, queryParams);
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            throw new Error("Error al actualizar el usuario");
        }
    }

    public async deleteUsuario(id: any): Promise<string> {
        const queryParams = {
            table: this.table,
            where: id.toString()
        };
        try {
            return await this.delete(queryParams);
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            throw new Error("Error al eliminar el usuario");
        }
    }
}

export default UsuarioRepository;
export const usuarioRepository = new UsuarioRepository();