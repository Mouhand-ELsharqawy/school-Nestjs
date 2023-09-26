import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { LabClass } from "./Lab.schema";
import { Model } from "mongoose";
import { Lab } from "./Lab.interface";
import { CreateLabDTO } from "./CreateLabDTO.dto";
import { UpdateLabDTO } from "./UpdateLabDTO.dto";

@Injectable()
export class LabService{
    constructor(
        @InjectModel(LabClass.name)
        private readonly LabModel: Model<LabClass>
    ){}
    async FindAll(): Promise<Lab[]>{
        return await this.LabModel.find().exec();
    }
    async Create(createlabdto:CreateLabDTO): Promise<Lab>{
        try{
            return await this.LabModel.create(createlabdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string): Promise<Lab>{
        try{
            return await this.LabModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatelabdto:UpdateLabDTO): Promise<Lab>{
        try{
            return await this.LabModel.findByIdAndUpdate(id,updatelabdto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string): Promise<Lab>{
        try{
            return await this.LabModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}