import { ConsoleMaper } from '../../domain/mapers/console.mapers';
import { ConsoleModel } from '../../database/mongodb/models/console.model';
import { CreateConsoleDto } from "../../domain/dtos/console/create-console.dto";
import { ConsoleEntity } from "../../domain/entities/console.entity";
import { PaginationDto } from '../../domain/dtos/console/paginationdto';



interface FindAllCategories{
  offset:number, 
  limit:number, 
  page:number, 
  total:number, 
  consola:ConsoleEntity[],
}

export class ConsoleService {
  async create(createConsoleDto: CreateConsoleDto): Promise<ConsoleEntity> {
    const {name}= createConsoleDto;
    try {
      const exist = await ConsoleModel.findOne({ name });
      if (exist) throw Error("error");
      const creador = await ConsoleModel.create(createConsoleDto);
      if (!creador) throw Error("error");
      await creador.save();
      return ConsoleMaper.fromEntity(creador);
    } catch (error) {
        throw error;
    }
}

async update(updateConsoleDto:CreateConsoleDto, id:string):Promise<ConsoleEntity>{
  try {
      const creador = await ConsoleModel.findByIdAndUpdate({
          id: updateConsoleDto,
          data:{...updateConsoleDto}
      });
      if(!creador) throw Error('Error')
      await creador.save();
      return ConsoleMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}

 
async delete(id:string):Promise<ConsoleEntity>{
  try {
      const creador = await ConsoleModel.findOneAndDelete({_id:id});
      if(!creador) throw Error('Error')
      return ConsoleMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}
async findOne(id:string):Promise<ConsoleEntity>{
  try {
      const creador = await ConsoleModel.findOne({_id:id});
      if(!creador) throw Error('Error')
      return ConsoleMaper.fromEntity(creador);

  } catch (error) {
      throw error; 
  }
}
  async findAll(paginationDto:PaginationDto):Promise<FindAllCategories> {
    const { offset, limit } = paginationDto
    try{

    //   const consola = await ConsoleModel.find({})
    //   .skip(offset)
    //   .limit(limit)
    //   const total = await ConsoleModel.find({}).countDocuments();

    const [ consola, total ] = await Promise.all([
        ConsoleModel.find({}).skip(offset).limit(limit),
        ConsoleModel.find({}).countDocuments(),
    ])
      
      return {
        offset,
        limit,
        page: (offset<=0)?1:Math.ceil( offset/limit ),
        total,
        consola: consola.map(product=>ConsoleMaper.fromEntity(product))
      };

    }catch(error){
      throw error;
    }
    }
  }

