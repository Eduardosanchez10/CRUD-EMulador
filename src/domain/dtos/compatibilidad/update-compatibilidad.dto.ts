export class UpdateCompatibilidadDto{
    constructor(
        public idEmulador:string,
        public idConsole:string,
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateCompatibilidadDto?]{
        const {idEmulador,idConsole } = object
        return [undefined, new UpdateCompatibilidadDto(idEmulador,idConsole )]
    }
  }