import { CreateCompatibilidadDto } from './../../domain/dtos/compatibilidad/create-compatibilidad.dto';
import { CompatibilidadModel } from '../../database/mongodb/models/compatibilidad.model';
import { PaginationDto } from '../../domain/dtos/console/paginationdto';
import { CompatibilidadEntity } from '../../domain/entities/compatibilidad.entity';
import { CompatibilidadMaper } from '../../domain/mapers/compatibilidad.Mapers';
import { UpdateCompatibilidadDto } from '../../domain/dtos/compatibilidad/update-compatibilidad.dto';




interface FindAllCompatibilidad{
  offset:number, 
  limit:number, 
  page:number, 
  total:number, 
  compatibilidad:CompatibilidadEntity[],

}

export class CompatibilidadService {
  async create(createCompatibilidadDto: CreateCompatibilidadDto): Promise<CompatibilidadEntity> {
    const {name}= CreateCompatibilidadDto;
    try {
      const exist = await CompatibilidadModel.findOne({ name });
      if (exist) throw Error("error");
      const creador = await CompatibilidadModel.create(createCompatibilidadDto);
      if (!creador) throw Error("error");
      await creador.save();
      return CompatibilidadMaper.fromEntity(creador);
    } catch (error) {
        throw error;
    }
}

async update(updateCompatibilidadDto:UpdateCompatibilidadDto, id:string):Promise<CompatibilidadEntity>{
  try {
      const creador = await CompatibilidadModel.findByIdAndUpdate({
          id:{...updateCompatibilidadDto}
      });
      if(!creador) throw Error('Error')
      await creador.save();
      return CompatibilidadMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}

 
async delete(id:string):Promise<CompatibilidadEntity>{
  try {
      const creador = await CompatibilidadModel.findOneAndDelete({_id:id});
      if(!creador) throw Error('Error')
      return CompatibilidadMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}
async findOne(id:string):Promise<CompatibilidadEntity>{
  try {
      const creador = await CompatibilidadModel.findOne({_id:id});
      if(!creador) throw Error('Error')
      return CompatibilidadMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}
async findAll(paginationDto:PaginationDto):Promise<FindAllCompatibilidad> {
  const { offset, limit } = paginationDto
  try{

    const compatibilidad = await CompatibilidadModel.find({})
    .skip(offset)
    .limit(limit)
    const total = await CompatibilidadModel.find({}).countDocuments();

      
    const mappedCompatibilidad = compatibilidad.map(CompatibilidadMaper.fromEntity);
    
    return {
      offset,
      limit,
      page: offset / limit + 1,
      total,
      compatibilidad: mappedCompatibilidad
    };

  }catch(error){
    throw error;
  }
  }
}

