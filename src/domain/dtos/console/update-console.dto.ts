export class UpdateConsoleDto{
    constructor(
        public name:string,
        public creador:string,
    ){};
  
    static update(object:{[key:string]:any}):[string?, UpdateConsoleDto?]{
        const {name,creador } = object
        return [undefined, new UpdateConsoleDto(name,creador )]
    }
  }