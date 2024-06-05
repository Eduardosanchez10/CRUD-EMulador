import { Router } from "express";
import { CompatibilidadController } from "./controller";
import { CompatibilidadService } from "../services/compatibilidad.service";

export class CompatibilidadRoute{
    static get routes(): Router{
        const routes= Router();
        const compatibilidadService = new CompatibilidadService();
        const controller = new CompatibilidadController(compatibilidadService);
        
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}