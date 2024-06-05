export class CreateEmuladorDto {

    constructor(
        public name:string,  
        public plataform:string,
        public developer:string, 
        public license?:String,
    ){};
    static create (object:{[key:string]:any}):[string?,CreateEmuladorDto?]{

const{name,plataform,developer,license}=object;

if(!name) return ['name is required ',undefined];
if(!plataform) return ['plataform is xdddddd',undefined];
if(!developer) return ['developer is required ',undefined];


return[undefined,new CreateEmuladorDto(name,plataform,developer,license)] 

    }
}
