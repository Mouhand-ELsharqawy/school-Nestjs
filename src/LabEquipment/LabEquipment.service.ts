import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { LabEquipmentClass } from "./LabEquipment.schema";
import { Model } from "mongoose";
import { LabEquipment } from "./LabEquipment.interface";
import { CreateLabEquipmentDTO } from "./CreateLabEquipmentDTO.dto";
import { UpdateLabEquipmentDTO } from "./UpdateLabEquipmentDTO.dto";

@Injectable()
export class LabEquipmentService{
    constructor(
        @InjectModel(LabEquipmentClass.name)
        private readonly LabEquipmentModel: Model<LabEquipmentClass>
    ){}
    async FindAll(): Promise<LabEquipment[]>{
        return await this.LabEquipmentModel.find().exec();
    }
    async Create(createlabequipment: CreateLabEquipmentDTO): Promise<LabEquipment>{
        try{
             return await this.LabEquipmentModel.create(createlabequipment);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string): Promise<LabEquipment>{
        try{
            return await this.LabEquipmentModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatelabequipmentdto: UpdateLabEquipmentDTO): Promise<LabEquipment>{
        try{
            return await this.LabEquipmentModel.findByIdAndUpdate(id,updatelabequipmentdto,{
                new: true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<LabEquipment>{
        try{
            return await this.LabEquipmentModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}