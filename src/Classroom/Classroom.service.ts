import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClassroomClass } from "./Classroom.schema";
import { Model } from "mongoose";
import { Classroom } from "./Classroom.interface";
import { CreateClassroomDTO } from "./CreateClassroomDTO.dto";
import { UpdateClassDTO } from "./UpdateClassroomDTO.dto";

@Injectable()
export class ClassroomService{
    constructor(
        @InjectModel(ClassroomClass.name)
        private readonly ClassroomModel: Model<ClassroomClass>
    ){}
    async FindAll(): Promise<Classroom[]>{
        return await this.ClassroomModel.find().exec();
    }
    async Create(createclassroomdto: CreateClassroomDTO): Promise<Classroom>{
        try{
            return await this.ClassroomModel.create(createclassroomdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string):Promise<Classroom>{
        try{
            return await this.ClassroomModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string,updateclassroomdto: UpdateClassDTO):Promise<Classroom>{
        try{
            return await this.ClassroomModel.findByIdAndUpdate(id,updateclassroomdto,{
                new:true
            })
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Classroom>{
        try{
            return await this.ClassroomModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }    
}