import { ConsoleEntity } from "../entities/console.entity";
export class ConsoleMaper{
static fromEntity(object:{[key:string]:any}):ConsoleEntity{

    const{id,name,creador}=object;
    if (!name) throw Error('error');

    if (!creador) throw Error('error');
    
    return new ConsoleEntity(id,name,creador)

}

}