import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { AuditoriumClass } from "./Auditorium.schema";
import { Model } from "mongoose";
import { Auditorium } from "./Auditorium.interface";
import { CreateAuditoriomDTO } from "./createAuditoriumDTO.dto";
import { UpdateAuditoriumDTO } from "./UpdateAuditoriumDTO.dto";
@Injectable()
export class AuditoriomService{
    constructor(
        @InjectModel(AuditoriumClass.name)
        private readonly AuditoriomModel: Model<AuditoriumClass>
    ){}

    async FindAll(): Promise<Auditorium[]>{
        return await this.AuditoriomModel.find().exec();
    }
    async Create(createauditoriumdto:CreateAuditoriomDTO): Promise<Auditorium>{
        try{
            return await this.AuditoriomModel.create(createauditoriumdto);
        }catch(err){
            throw new NotFoundException();
        }
    }

    async FindOne( id:string): Promise<Auditorium>{
        try{
            return await this.AuditoriomModel.findById(id); 
        }catch(err){
            throw new NotFoundException();
        }
    }

    async Update( id:string, updateauditoriumdto: UpdateAuditoriumDTO ): Promise<Auditorium>{
        try{
            return await this.AuditoriomModel.findByIdAndUpdate(id,updateauditoriumdto,{
                new: true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Auditorium>{
        try{
            return await this.AuditoriomModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}