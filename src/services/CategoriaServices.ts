import { JWTPayload, jwtVerify } from "jose";
import CategoriaRepository, { categoriaRepository } from "../repositories/CategoriaRepository";
import CategoriaOutputDTO from "../model/dto/Output/CategoriaOutputDTO";

class CategoriaServices {
    private repository: CategoriaRepository;

    constructor() {
        this.repository = categoriaRepository;
    }

    public async getAllCategorias(): Promise<CategoriaOutputDTO[]> {
        try {
            return await this.repository.getAllCategorias();
        } catch (error) {
            throw error
        }
    }

    public async getCategoriaByID(token: string): Promise<CategoriaOutputDTO | null> {
        try {
            const body = await this.getBody(token)
            const id = await body.id;
            return await this.repository.getCategoriaById(id);
        } catch (error) {
            throw error
        }
    }


    public async insertCategoria(token: string): Promise<string> {

        try {
            return await this.repository.insertCategoria(this.getBody(token));
        } catch (error) {
            throw error;
        }
    }

    public async updateCategoria(token: string): Promise<any> {
        try {
            const body = await this.getBody(token);
            const id = await body.id;
            delete body.id
            return await this.repository.updateCategoria(id, body);
        } catch (error) {
            throw error;
        }
    }

    public async deleteCategoria(token: string): Promise<string> {
        try {
            const body = await this.getBody(token);
            const id = await body.id;
            return await this.repository.deleteCategoria(id);
        } catch (error) {
            throw error;
        }
    }

    public async getBody(token: string): Promise<JWTPayload> {
        const encoder = new TextEncoder();
        try {
            const jwtData = await jwtVerify(
                token,
                encoder.encode(process.env.JWT_PRIVATE_KEY)
            )
            const body = jwtData.payload
            delete body.iat;
            delete body.exp;

            return body
        } catch (error) {
            throw new Error('El token aún no se ha generado, espere unos segundos y vuelva a intentarlo :(')
        }


    }
}
export default CategoriaServices;
export const categoriaService = new CategoriaServices();