import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Phim } from './phim.entity';

@Injectable()
export class PhimService {


    constructor(@InjectRepository(Phim) private phimRepo : Repository<Phim>){}


    async findAll(): Promise<Phim[]>{
        return await this.phimRepo.find();
    }


    async findOne(id: number): Promise<Phim>{
        return await this.phimRepo.findOne(id);
    }

     async create (phim: Phim): Promise<Phim> {
        return await this.phimRepo.save(phim)
      }
    
      async update(phim: Phim): Promise<UpdateResult> {
        return await this.phimRepo.update(phim.id, phim);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.phimRepo.delete(id);
      }




}
