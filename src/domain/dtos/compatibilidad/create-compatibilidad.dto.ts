export class CreateCompatibilidadDto {

    constructor(public idEmulador: string,public idConsole:string) {}
    static create (object:{[key:string]:any}):[string?,CreateCompatibilidadDto?]{

const{idEmulador,idConsole}=object;

if(!idEmulador) return ['idEmulador is required ',undefined];
if(!idConsole) return ['idConsole is required ',undefined];
return[undefined,new CreateCompatibilidadDto(idEmulador,idConsole)] 

    }
}
