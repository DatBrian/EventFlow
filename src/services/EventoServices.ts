import EventoRepository, { eventoRepository } from "../repositories/EventoRepository";
import EventoOutputDTO from "../model/dto/Output/EventoOutputDTO";
import { verifyJWT } from "../common/FunctionsCommon";

class EventoServices {
    private repository: EventoRepository;

    constructor() {
        this.repository = eventoRepository;
    }

    //* Métodos CRUD

    public async getAllEventos(): Promise<EventoOutputDTO[]> {
        try {
            return await this.repository.getAllEventos();
        } catch (error) {
            throw error
        }
    }

    public async getEventoByID(token: string): Promise<EventoOutputDTO | null> {
        try {
            const body = await verifyJWT(token)
            const id = await body.id;
            return await this.repository.getEventoById(id);
        } catch (error) {
            throw error
        }
    }


    public async insertEvento(token: string): Promise<string> {

        try {
            return await this.repository.insertEvento(await verifyJWT(token));
        } catch (error) {
            throw error;
        }
    }

    public async updateEvento(token: string): Promise<any> {
        try {
            const body = await verifyJWT(token);
            const id = await body.id;
            console.log(body, id);
            delete body.id
            return await this.repository.updateEvento(id, body);
        } catch (error) {
            throw error;
        }
    }

    public async deleteEvento(token: string): Promise<string> {
        try {
            const body = await verifyJWT(token);
            const id = await body.id;
            return await this.repository.deleteEvento(id);
        } catch (error) {
            throw error;
        }
    }

    //* EndPoints adicionales

    public async getAllEventDetails(): Promise<EventoOutputDTO[]> {
        try {
            return await this.repository.getAllEventDetails();
        } catch (error) {
            throw error;
        }
    }

    public async getEventDetails(token: string): Promise<EventoOutputDTO | null> {
        try {
            const body = await verifyJWT(token);
            const id = await body.id;
            return await this.repository.getEventDetails(id)
        } catch (error) {
            throw error;
        }
    }

}
export default EventoServices;
export const eventoService = new EventoServices();