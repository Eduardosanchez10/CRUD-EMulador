export class CreateConsoleDto {

    constructor(
        public name:string,
        public creador:string
    ){};

    static create (object:{[key:string]:any}):[string?,CreateConsoleDto?]{

const{name,creador}=object;

if(!name) return ['name is required ',undefined];
if(!creador) return ['creador is required ',undefined];
return[undefined,new CreateConsoleDto(name,creador)] 

    }
}
