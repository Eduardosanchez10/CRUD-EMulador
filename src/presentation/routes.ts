import {Router} from "express";
import { ConsoleRoute } from "./console/route"
import {EmuladorRoute} from "./emulador/route"
import { CompatibilidadRoute} from "./compatibilidad/route"
export class AppRoute{

    static get routes(): Router{
        const routes = Router();
        
        routes.use('/api/console', ConsoleRoute.routes );
        routes.use('/api/emulador', EmuladorRoute.routes );
        routes.use('/api/compatibilidad', CompatibilidadRoute.routes );

        
        return routes;
    }
}