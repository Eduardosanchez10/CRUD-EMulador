import { Router } from "express";
import { EmuladorService } from "../services/emulador.service";
import { EmuladorController } from "./controller";


export class EmuladorRoute{
    static get routes(): Router{

        const routes= Router();
        const emuladorService = new EmuladorService();
        const controller = new EmuladorController(emuladorService);

        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}