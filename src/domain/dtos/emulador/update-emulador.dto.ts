export class UpdateEmuladorDto{
    constructor(
        public name: string,  
        public plataform:string,
        public developer:string, 
        public license?:String,
    ){}
  
    static update(object:{[key:string]:any}):[string?, UpdateEmuladorDto?]{
        const {name, plataform,developer,license} = object
        return [undefined, new UpdateEmuladorDto(name, plataform,developer,license)]
    }
  }