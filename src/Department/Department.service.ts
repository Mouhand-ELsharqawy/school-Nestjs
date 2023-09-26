import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DepartmentClass } from "./Department.schema";
import { Model } from "mongoose";
import { Department } from "./Department.interface";
import { CreateDepartmentDTO } from "./CreateDepartmentDTO.dto";
import { UpdateDepartmentDTO } from "./UpdateDepartmentDTO.dto";

@Injectable()
export class DepartmentService{
    constructor(
        @InjectModel(DepartmentClass.name)
        private readonly DepartmentModel: Model<DepartmentClass>
    ){}
    async FindAll():Promise<Department[]>{
        return await this.DepartmentModel.find().exec();
    }

    async Create(createdepartmentdto:CreateDepartmentDTO):Promise<Department>{
        try{
            return await this.DepartmentModel.create(createdepartmentdto);
        }catch(err){
            throw new NotFoundException();
        }
    }

    async FindOne(id:string):Promise<Department>{
        try{
            return await this.DepartmentModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatedepartmentdto:UpdateDepartmentDTO):Promise<Department>{
        try{
            return await this.DepartmentModel.findByIdAndUpdate(id,updatedepartmentdto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Department>{
        try{
            return await this.DepartmentModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }

}