import { Request, Response } from "express";
import { CreateEmuladorDto } from "../../domain/dtos/emulador/create-emulador.dto";
import { EmuladorService } from "../services/emulador.service";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/console/paginationdto";
import { UpdateEmuladorDto } from "../../domain/dtos/emulador/update-emulador.dto";

export class EmuladorController {
    constructor(private readonly emuladorService: EmuladorService) {}
    create = (req: Request, res: Response) => {
      const [error, createEmulador] = CreateEmuladorDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.emuladorService.create(createEmulador!)
      .then(emulador => res.json(emulador))
      .catch(error => res.status(500).json(error));
    };
  
    update = (req:Request, res:Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateEmuladorDto] = UpdateEmuladorDto.update(req.body)
      if(error) return res.status(400).json({error})
      this.emuladorService.update(updateEmuladorDto!, id!)
      .then(emulador => res.json(emulador))
      .catch(error => res.status(500).json(error))
   };
  
    delete = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.emuladorService.delete(id!)
    .then(emulador => res.json(emulador))
    .catch(error => res.status(500).json(error))
    };
  
  
    findAll = (req: Request, res: Response) => {

        const [error, paginationDto]=  PaginationDto.paginate(req.query);
    
        if(error) return res.status(400).json({error})
    
        this.emuladorService.findAll(paginationDto!)
    
        .then(emulador=> res.json(emulador))
    
        .catch(error=> res.status(500).json)
      };
    
  
    findOne = (req: Request, res: Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      this.emuladorService.findOne(id!)
      .then(emulador => res.json(emulador))
      .catch(error => res.status(500).json(error))  
    };
  }