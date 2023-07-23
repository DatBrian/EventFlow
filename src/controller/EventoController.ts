import EventoServices, { eventoService } from "../services/EventoServices";
import { Request, Response } from "express";

export class EventoController {
    private readonly service: EventoServices;
    private cookie: string;
    constructor() {
        this.service = eventoService;
        this.cookie = 'token';
    }

    public getAllEvento = async (_req: Request, res: Response) => {
        try {
            const Eventos = await this.service.getAllEventos();
            res.json(Eventos);
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las categorías, revise la consola para más información' });

        }
    }

    public getEventoById = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const Evento = await this.service.getEventoByID(token);
            res.clearCookie(this.cookie);
            res.json(Evento);
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener la categoría, revise la consola para más información' });
        }
    }

    public insertEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const newEvento = await this.service.insertEvento(token);
            res.clearCookie(this.cookie);
            res.json(newEvento);
        } catch (error) {
            console.error('Error al insertar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al insertar la categoría, revise la consola para más información' });
        }
    }

    public updateEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const updated = await this.service.updateEvento(token);
            res.clearCookie(this.cookie);
            res.json(updated)
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar la categoría, revise la consola para más información' });
        }
    }

    public deleteEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const deleted = await this.service.deleteEvento(token);
            res.clearCookie(this.cookie)
            res.json(deleted)
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al eliminar la categoría, revise la consola para más información' });
        }
    }
}
export default EventoController
export const eventoController = new EventoController();