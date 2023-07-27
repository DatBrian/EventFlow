import { Router, Response } from "express";
import { authJWTMiddleware } from "../middleware/AuthJTWMiddleware";
import { Request as CustomRequest } from '../interfaces/AuthRequestInterface'

class AuthRoutes {
    public path: string;
    public router: Router;

    constructor() {
        this.path = '/token';
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}/check`, (req: CustomRequest, res: Response) => {
            const token = req.session.token;

            const response = !token
                ? {
                    status: "No hay tokens activos, genere uno nuevo",
                }
                : {
                    status: "Hay un token activo n.n",
                    token: token,
                };
            res.json(response);
        });
        this.router.post(`${this.path}/generate`, authJWTMiddleware.generateToken, (req: CustomRequest, res: Response) => {
            const token = req.session.token;
            res.json({
                status: "Token generado correctamente :D",
                token: token
            })
        });

    }
}

export const authRoutes = new AuthRoutes();