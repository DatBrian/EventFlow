import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import ValidateMiddlewareDTO from "../middleware/ValidateMiddlewareDTO";
import UsuarioController, { usuarioController } from "../controller/UsuarioController";
import UsuarioInputDTO from "../model/dto/Input/UsuarioInputDTO";
import EncryptDataMiddleware from "../middleware/EncryptDataMiddleware";
import ParamsInputDTO from "../model/dto/Input/ParamsInputDTO";

class UsuarioRoutes extends RouterCommon<UsuarioController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: UsuarioController;

    constructor() {
        super(UsuarioController, ValidateMiddlewareDTO);
        this.path = '/usuario';
        this.router = Router();
        this.controller = usuarioController;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}/all`, this.controller.getAllUsuario)
        this.router.get(`${this.path}/id`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.getUsuarioById(req, res);
            });
        this.router.post(`${this.path}/create`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, UsuarioInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.insertUsuario(req, res);
            });
        this.router.put(`${this.path}/update`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, UsuarioInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.updateUsuario(req, res)
            });
        this.router.delete(`${this.path}/delete`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.deleteUsuario(req, res);
            }
        )
    }
}

export const usuarioRoutes = new UsuarioRoutes();