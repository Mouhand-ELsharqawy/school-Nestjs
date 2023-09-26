import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClassEquipmentClass } from "./ClassEquipment.schema";
import { Model } from "mongoose";
import { ClassEquipment } from "./ClassEquipment.interface";
import { CreateClassEquipmentDTO } from "./CreateClassEquipmentDTO.dto";

@Injectable()
export class ClassEquipmentService{
    constructor(
        @InjectModel(ClassEquipmentClass.name)
        private readonly ClassEquipmentModel: Model<ClassEquipmentClass>
    ){}
    async FindAll():Promise<ClassEquipment[]>{
        return await this.ClassEquipmentModel.find().exec()
    }
    async Create(createclassequipmentdto: CreateClassEquipmentDTO):Promise<ClassEquipment>{
        try{
            return await this.ClassEquipmentModel.create(createclassequipmentdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string):Promise<ClassEquipment>{
        try{
            return await this.ClassEquipmentModel.findById(id)
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updateclassequipmentdtp:CreateClassEquipmentDTO):Promise<ClassEquipment>{
        try{
            return await this.ClassEquipmentModel.findByIdAndUpdate(id,updateclassequipmentdtp,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<ClassEquipment>{
        try{
            return await this.ClassEquipmentModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}