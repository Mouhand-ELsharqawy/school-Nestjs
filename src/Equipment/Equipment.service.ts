import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EquipmentClass } from "./Equipment.schema";
import { Model } from "mongoose";
import { Equipment } from "./Equipment.interface";
import { CreateEquipmentDTO } from "./CreateEquipmentDTO.dto";
import { UpdateEquipmentDTO } from "./UpdateEquipmentDTO.dto";

@Injectable()
export class EquipmentService{
    constructor(
        @InjectModel(EquipmentClass.name)
        private readonly EquipmentModel: Model<EquipmentClass>
    ){}
    async FindAll(): Promise<Equipment[]>{
        return await this.EquipmentModel.find().exec();
    }
    async Create(createequipmentdto:CreateEquipmentDTO): Promise<Equipment>{
        try{
            return await this.EquipmentModel.create(createequipmentdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string):Promise<Equipment>{
        try{
            return await this.EquipmentModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updateequipmentdto: UpdateEquipmentDTO): Promise<Equipment>{
        try{
            return await this.EquipmentModel.findByIdAndUpdate(id,updateequipmentdto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Equipment>{
        try{
            return await this.EquipmentModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}