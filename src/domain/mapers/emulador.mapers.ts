import { EmuladorEntity } from "../entities/emulador.entity"
export class EmuladorMaper{
static fromEntity(object:{[key:string]:any}):EmuladorEntity{

    const{id,name,plataform,developer,license}=object;
    if (!name) throw Error('error');
    if (!developer) throw Error('error');
    if (!plataform) throw Error('error');

    return new EmuladorEntity(id,name,plataform,developer,license)

}

}