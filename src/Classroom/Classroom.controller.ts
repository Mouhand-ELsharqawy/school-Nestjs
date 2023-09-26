import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { ClassroomService } from "./Classroom.service";
import { Classroom } from "./Classroom.interface";
import { CreateClassroomDTO } from "./CreateClassroomDTO.dto";
import { UpdateClassDTO } from "./UpdateClassroomDTO.dto";

@Controller("classroom")
export class ClassroomController{
    constructor(
        private readonly classroomservice: ClassroomService
    ){}
    @Get()
    FindAll():Promise<Classroom[]>{
        return this.classroomservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createclassroomdto:CreateClassroomDTO):Promise<Classroom>{
        return this.classroomservice.Create(createclassroomdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Classroom>{
        return this.classroomservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string ,
        @Body(
            ValidationPipe
            ) updateclassroomdto:UpdateClassDTO):Promise<Classroom>{
                return this.classroomservice.Update(id,updateclassroomdto);
            }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Classroom>{
        return this.classroomservice.Remove(id);
    }
}