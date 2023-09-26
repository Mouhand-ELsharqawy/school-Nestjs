import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EmployeeClass } from "./Employee.schema";
import { Model } from "mongoose";
import { Employee } from "./Employee.interface";
import { CreateEmployeeDTO } from "./CreateEmployeeDTO.dto";
import { UpdateEmployeeDTO } from "./UUpdateEmployeeDTO.dto";

@Injectable()
export class EmployeeService{
    constructor(
        @InjectModel(EmployeeClass.name)
        private readonly EmployeeModel: Model<EmployeeClass>
    ){}
    async FindAll():Promise<Employee[]>{
        return await this.EmployeeModel.find().exec();
    }
    async Create(createemployeedto:CreateEmployeeDTO):Promise<Employee>{
        try{
            return await this.EmployeeModel.create(createemployeedto)
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string):Promise<Employee>{
        try{
            return await this.EmployeeModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updateemployeedto: UpdateEmployeeDTO): Promise<Employee>{
        try{
            return await this.EmployeeModel.findByIdAndUpdate(id,updateemployeedto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string): Promise<Employee>{
        try{
            return await this.EmployeeModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}