import { Request, Response } from "express";
import { CreateCompatibilidadDto } from "../../domain/dtos/compatibilidad/create-compatibilidad.dto";
import { CompatibilidadService } from "../services/compatibilidad.service";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/console/paginationdto";
import { UpdateCompatibilidadDto } from "../../domain/dtos/compatibilidad/update-compatibilidad.dto";

export class CompatibilidadController {
    constructor(private readonly compatibilidadService: CompatibilidadService) {}
    create = (req: Request, res: Response) => {
      const [error, createCompatibilidad] = CreateCompatibilidadDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.compatibilidadService.create(createCompatibilidad!)
      .then(compatibilidad => res.json(compatibilidad))
      .catch(error => res.status(500).json(error));
    };
  
    update = (req:Request, res:Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateCompatibilidadDto] = UpdateCompatibilidadDto.update(req.body)
      if(error) return res.status(400).json({error})
      this.compatibilidadService.update(updateCompatibilidadDto!, id!)
      .then(compatibilidad => res.json(compatibilidad))
      .catch(error => res.status(500).json(error))
   };
  
    delete = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.compatibilidadService.delete(id!)
    .then(compatibilidad => res.json(compatibilidad))
    .catch(error => res.status(500).json(error))
    };
  
  
    findAll = (req: Request, res: Response) => {

        const [error, paginationDto]=  PaginationDto.paginate(req.query);
    
        if(error) return res.status(400).json({error})
    
        this.compatibilidadService.findAll(paginationDto!)
    
        .then(compatibilidad=> res.json(compatibilidad))
    
        .catch(error=> res.status(500).json)
      };
    
  
    findOne = (req: Request, res: Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      this.compatibilidadService.findOne(id!)
      .then(Compatibilidad => res.json(Compatibilidad))
      .catch(error => res.status(500).json(error))  
    };
  }