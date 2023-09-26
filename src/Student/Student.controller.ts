import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { StudentService } from "./Student.service";
import { Student } from "./Student.interface";
import { CreateStudentDTO } from "./CreateStudentDTO.dto";
import { UpdateStudentDTO } from "./UpdateStudentDTO.dto";

@Controller()
export class StudentController{
    constructor( private readonly studentservice:StudentService ){}
    @Get()
    FindAll():Promise<Student[]>{
        return this.studentservice.FindAll()
    }
    @Post()
    Create(@Body(ValidationPipe) createstudentdto:CreateStudentDTO):Promise<Student>{
        return this.studentservice.Create(createstudentdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Student>{
        return this.studentservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string,
        @Body(
            ValidationPipe
            ) updatestudentdto:UpdateStudentDTO): 
            Promise<Student>{
        return this.studentservice.Update(id,updatestudentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Student>{
        return this.studentservice.Remove(id);
    }
}