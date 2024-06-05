import { CustomError } from '../errors/custom.error';
import { CompatibilidadEntity } from "../entities/compatibilidad.entity";
export class CompatibilidadMaper{
static fromEntity(object:{[key:string]:any}):CompatibilidadEntity{

    const{idEmulador,idConsole}=object;
    if (!idEmulador) throw CustomError.badRequest;

    if (!idConsole) throw CustomError.badRequest;
    
    return new CompatibilidadEntity(idEmulador,idConsole)

}

}