import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ManagementClass } from "./Management.schema";
import { Model } from "mongoose";
import { Managment } from "./Management.interface";
import { CreateManagementDTO } from "./CreateManagementDTO.dto";
import { UpdateManagementDTo } from "./UpdateManagementDTO.dto";

@Injectable()
export class ManagementService{
    constructor(
        @InjectModel(ManagementClass.name)
        private readonly ManagementModel: Model<ManagementClass>
    ){}
    async FindAll(): Promise<Managment[]>{
        return await this.ManagementModel.find().exec();
    }

    async Create(createmanagementdto: CreateManagementDTO):Promise<Managment>{
        try{
            return await this.ManagementModel.create(createmanagementdto);
        }catch(err){
            throw new NotFoundException();
        }
    }

    async FindOne( id:string ): Promise<Managment>{
        try{
            return await this.ManagementModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    
    async Update(id:string, updatemanagementdto:UpdateManagementDTo): Promise<Managment>{
        try{
            return await this.ManagementModel.findByIdAndUpdate(id,String,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }

    async Remove(id:string): Promise<Managment>{
        try{
            return await this.ManagementModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}