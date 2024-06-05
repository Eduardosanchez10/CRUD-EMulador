import { Request, Response } from "express";
import { CreateConsoleDto } from "../../domain/dtos/console/create-console.dto";
import { ConsoleService } from "../services/console.service";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/console/paginationdto";
import { UpdateConsoleDto } from "../../domain/dtos/console/update-console.dto";

export class ConsoleController {
    constructor(private readonly consoleService: ConsoleService) {}
    create = (req: Request, res: Response) => {
      const [error, createConsoleDto] = CreateConsoleDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.consoleService.create(createConsoleDto!)
      .then(Console => res.json(Console))
      .catch(error => res.status(500).json(error));
    };
  
    update = (req:Request, res:Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateConsoleDto] = UpdateConsoleDto.update(req.body)
      if(error) return res.status(400).json({error})
      this.consoleService.update(updateConsoleDto!, id!)
      .then(console => res.json(console))
      .catch(error => res.status(500).json(error))
   };
  
    delete = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.consoleService.delete(id!)
    .then(console => res.json(console))
    .catch(error => res.status(500).json(error))
    };
  
  
    findAll = (req: Request, res: Response) => {

        const [error, paginationDto]=  PaginationDto.paginate(req.query);
    
        if(error) return res.status(400).json({error})
    
        this.consoleService.findAll(paginationDto!)
    
        .then(console=> res.json(console))
    
        .catch(error=> res.status(500).json)
      };
    
  
    findOne = (req: Request, res: Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      this.consoleService.findOne(id!)
      .then(console => res.json(console))
      .catch(error => res.status(500).json(error))  
    };
  }