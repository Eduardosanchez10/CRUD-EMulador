import { Router } from "express";
import { ConsoleController } from "./controller";
import { ConsoleService } from "../services/console.service";


export class ConsoleRoute{
    static get routes(): Router{
        const routes= Router();

        const consoleService = new ConsoleService();
        const controller = new ConsoleController(consoleService);
        
        routes.get('/',controller.findAll);
        routes.get('/:id',controller.findOne);
        routes.post('/',controller.create);    
        routes.delete('/:id',controller.delete);
        routes.put('/:id',controller.update);

        return routes;
    }
}