import EventoServices, { eventoService } from "../services/EventoServices";
import { Request, Response } from "express";

export class EventoController {
    private readonly service: EventoServices;
    private cookie: string;
    constructor() {
        this.service = eventoService;
        this.cookie = 'token';
    }

    //* Métodos CRUD

    public getAllEvento = async (_req: Request, res: Response) => {
        try {
            const Eventos = await this.service.getAllEventos();
            res.json(Eventos);
        } catch (error) {
            console.error('Error al obtener los eventos:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los eventos, revise la consola para más información' });

        }
    }

    public getEventoById = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const Evento = await this.service.getEventoByID(token);
            res.clearCookie(this.cookie);
            res.json(Evento);
        } catch (error) {
            console.error('Error al obtener el evento:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener el evento, revise la consola para más información' });
        }
    }

    public insertEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const newEvento = await this.service.insertEvento(token);
            res.clearCookie(this.cookie);
            res.json(newEvento);
        } catch (error) {
            console.error('Error al insertar el evento:', error);
            res.status(500).json({ error: 'Ocurrió un error al insertar el evento, revise la consola para más información' });
        }
    }

    public updateEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const updated = await this.service.updateEvento(token);
            res.clearCookie(this.cookie);
            res.json(updated)
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar el evento, revise la consola para más información' });
        }
    }

    public deleteEvento = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const deleted = await this.service.deleteEvento(token);
            res.clearCookie(this.cookie)
            res.json(deleted)
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
            res.status(500).json({ error: 'Ocurrió un error al eliminar el evento, revise la consola para más información' });
        }
    }

    //* EndPoints Adicionales

    public getAllEventDetails = async (_req: Request, res: Response) => {
        try {
            const details = await this.service.getAllEventDetails();
            res.json(details)
        } catch (error) {
            console.error('Error al obtener los detalles de los eventos:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los detalles de los eventos, revise la consola para más información' });
        }
    }

    public getEventDetails = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const details = await this.service.getEventDetails(token);
            res.clearCookie(this.cookie);
            res.json(details);
        } catch (error) {
            console.error('Error al obtener los detalles del evento:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener los detalles del evento, revise la consola para más información' });
        }
    }
}
export default EventoController
export const eventoController = new EventoController();