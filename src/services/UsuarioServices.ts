import UsuarioRepository, { usuarioRepository } from "../repositories/UsuarioRepository";
import UsuarioOutputDTO from "../model/dto/Output/UsuarioOutputDTO";
import { verifyJWT } from "../common/FunctionsCommon";

class UsuarioServices {
    private repository: UsuarioRepository;

    constructor() {
        this.repository = usuarioRepository;
    }

    public async getAllUsuarios(): Promise<UsuarioOutputDTO[]> {
        try {
            return await this.repository.getAllUsuarios();
        } catch (error) {
            throw error
        }
    }

    public async getUsuarioByID(token: string): Promise<UsuarioOutputDTO | null> {
        try {
            const body = await verifyJWT(token)
            const id = await body.id;
            return await this.repository.getUsuarioById(id);
        } catch (error) {
            throw error
        }
    }


    public async insertUsuario(token: string): Promise<string> {

        try {
            return await this.repository.insertUsuario(await verifyJWT(token));
        } catch (error) {
            throw error;
        }
    }

    public async updateUsuario(token: string): Promise<any> {
        try {
            const body = await verifyJWT(token);
            const id = await body.id;
            console.log(body, id);
            delete body.id
            return await this.repository.updateUsuario(id, body);
        } catch (error) {
            throw error;
        }
    }

    public async deleteUsuario(token: string): Promise<string> {
        try {
            const body = await verifyJWT(token);
            const id = await body.id;
            return await this.repository.deleteUsuario(id);
        } catch (error) {
            throw error;
        }
    }

}
export default UsuarioServices;
export const usuarioService = new UsuarioServices();