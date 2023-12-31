import { Router } from "express";
import RouterCommon from "../common/RouterCommon";
import ValidateMiddlewareDTO from "../middleware/ValidateMiddlewareDTO";
import EventoController, { eventoController } from "../controller/EventoController";
import EventoInputDTO from "../model/dto/Input/EventoInputDTO";
import EncryptDataMiddleware from "../middleware/EncryptDataMiddleware";
import ParamsInputDTO from "../model/dto/Input/ParamsInputDTO";

class EventoRoutes extends RouterCommon<EventoController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: EventoController;

    constructor() {
        super(EventoController, ValidateMiddlewareDTO);
        this.path = '/evento';
        this.router = Router();
        this.controller = eventoController;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}/all`, this.controller.getAllEvento)
        this.router.get(`${this.path}/id`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.getEventoById(req, res);
            });
        this.router.get(`${this.path}/details/all`, this.controller.getAllEventDetails);
        this.router.get(`${this.path}/details/id`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.getEventDetails(req, res);
            });
        this.router.get(`${this.path}/ubication`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.getEventsByUbication(req, res);
            });
        this.router.get(`${this.path}/category`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.getEventsByCategory(req, res);
            });
        this.router.post(`${this.path}/create`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, EventoInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.insertEvento(req, res);
            });
        this.router.put(`${this.path}/update`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, EventoInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.updateEvento(req, res)
            });
        this.router.delete(`${this.path}/delete`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ParamsInputDTO);
            },
            EncryptDataMiddleware.execute,
            (req, res) => {
                this.controller.deleteEvento(req, res);
            });
    }
}

export const eventoRoutes = new EventoRoutes();