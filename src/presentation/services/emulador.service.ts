import { EmuladorMaper } from './../../domain/mapers/emulador.mapers';
import { EmuladorModel } from './../../database/mongodb/models/emulador.model';
import { EmuladorEntity } from './../../domain/entities/emulador.entity';
import { promises } from "dns";

import {PaginationDto} from "../../domain/dtos/emulador/paginationdto"
import { CreateEmuladorDto } from '../../domain/dtos/emulador/create-emulador.dto';

interface FindAllEmulador{
  offset:number, 
  limit:number, 
  page:number, 
  total:number, 
  emulador:EmuladorEntity[],
}

export class EmuladorService {
  async create(createEmuladorDto: CreateEmuladorDto): Promise<EmuladorEntity> {
    const {name}= createEmuladorDto;
    try {
      const exist = await EmuladorModel.findOne({ name });
      if (exist) throw Error("error");
      const plataform = await EmuladorModel.create(createEmuladorDto);
      if (!plataform) throw Error("error");
      await plataform.save();
      return EmuladorMaper.fromEntity(plataform);
    } catch (error) {
        throw error;
    }
}

async update(updateEmuladorDto:CreateEmuladorDto, id:string):Promise<EmuladorEntity>{
  try {
      const plataform = await EmuladorModel.findByIdAndUpdate({
          id: updateEmuladorDto,
          data:{...updateEmuladorDto}
      });
      if(!plataform) throw Error('Error')
      await plataform.save();
      return EmuladorMaper.fromEntity(plataform);

  } catch (error) {
      throw error; 
  }
}

 
async delete(id:string):Promise<EmuladorEntity>{
  try {
      const plataform = await EmuladorModel.findOneAndDelete({_id:id});
      if(!plataform) throw Error('Error')
      return EmuladorMaper.fromEntity(plataform);

  } catch (error) {
      throw error; 
  }
}
async findOne(id:string):Promise<EmuladorEntity>{
  try {
      const plataform = await EmuladorModel.findOne({_id:id});
      if(!plataform) throw Error('Error')
      return EmuladorMaper.fromEntity(plataform);

  } catch (error) {
      throw error; 
  }
}
  async findAll(paginationDto:PaginationDto):Promise<FindAllEmulador> {
    const { offset, limit } = paginationDto
    try{

      const emulador = await EmuladorModel.find({})
      .skip(offset)
      .limit(limit)
      const total = await EmuladorModel.find({}).countDocuments();

        
      const mappedEmulador = emulador.map(EmuladorMaper.fromEntity);
      
      return {
        offset,
        limit,
        page: offset / limit + 1,
        total,
        emulador: mappedEmulador
      };

    }catch(error){
      throw error;
    }
    }
  }

