import CategoriaServices, { categoriaService } from "../services/CategoriaServices";
import { Request, Response } from "express";

export class CategoriaController {
    private readonly service: CategoriaServices;
    private cookie: string;
    constructor() {
        this.service = categoriaService;
        this.cookie = 'token';
    }

    public getAllCategoria = async (_req: Request, res: Response) => {
        try {
            const categorias = await this.service.getAllCategorias();
            res.json(categorias);
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las categorías' });

        }
    }

    public getCategoriaById = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const categoria = await this.service.getCategoriaByID(token);
            res.clearCookie(this.cookie);
            res.json(categoria);
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener la categoría' });
        }
    }

    public insertCategoria = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const newCategoria = await this.service.insertCategoria(token);
            res.clearCookie(this.cookie);
            res.json(newCategoria);
        } catch (error) {
            console.error('Error al insertar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al insertar la categoría' });
        }
    }

    public updateCategoria = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const updated = await this.service.updateCategoria(token);
            res.clearCookie(this.cookie);
            res.json(updated)
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar la categoría' });
        }
    }

    public deleteCategoria = async (req: Request, res: Response) => {
        try {
            const token = await req.cookies.token;
            const deleted = await this.service.deleteCategoria(token);
            res.clearCookie(this.cookie)
            res.json(deleted)
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            res.status(500).json({ error: 'Ocurrió un error al eliminar la categoría' });
        }
    }
}
export default CategoriaController
export const categoriaController = new CategoriaController();