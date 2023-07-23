import UsuarioServices, { usuarioService } from "../services/UsuarioServices";
import { Request, Response } from "express";

export class UsuarioController {
    private readonly service: UsuarioServices;
    private cookie: string;
    constructor() {
        this.service = usuarioService;
        this.cookie = 'token';
    }

    public getAllUsuario = async (_req: Request, res: Response) => {
        try {
            const Usuarios = await this.service.getAllUsuarios();
            res.json(Usuarios);
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las categorías, revise la consola para más información' });

        }
    }

    public getUsuarioById = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const Usuario = await this.service.getUsuarioByID(token);
            res.clearCookie(this.cookie);
            res.json(Usuario);
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener la categoría, revise la consola para más información' });
        }
    }

    public insertUsuario = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const newUsuario = await this.service.insertUsuario(token);
            res.clearCookie(this.cookie);
            res.json(newUsuario);
        } catch (error) {
            console.error('Error al insertar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al insertar la categoría, revise la consola para más información' });
        }
    }

    public updateUsuario = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const updated = await this.service.updateUsuario(token);
            res.clearCookie(this.cookie);
            res.json(updated)
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar la categoría, revise la consola para más información' });
        }
    }

    public deleteUsuario = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const deleted = await this.service.deleteUsuario(token);
            res.clearCookie(this.cookie)
            res.json(deleted)
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al eliminar la categoría, revise la consola para más información' });
        }
    }
}
export default UsuarioController
export const usuarioController = new UsuarioController();