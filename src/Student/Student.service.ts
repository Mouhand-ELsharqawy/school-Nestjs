import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { StudentClass } from "./Student.schema";
import { Model } from "mongoose";
import { Student } from "./Student.interface";
import { CreateStudentDTO } from "./CreateStudentDTO.dto";
import { UpdateStudentDTO } from "./UpdateStudentDTO.dto";

@Injectable()
export class StudentService{
    constructor(
        @InjectModel(StudentClass.name)
        private readonly StudentModel: Model<StudentClass>
    ){}
    async FindAll(): Promise<Student[]>{
        return await this.StudentModel.find().exec();
    }
    async Create(createstudentdto:CreateStudentDTO): Promise<Student>{
        try{
            return await this.StudentModel.create(createstudentdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string): Promise<Student>{
        try{
            return await this.StudentModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatestudentdto:UpdateStudentDTO):Promise<Student>{
        try{
            return await this.StudentModel.findByIdAndUpdate(id,updatestudentdto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string): Promise<Student>{
        try{
            return await this.StudentModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}