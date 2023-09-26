import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { DepartmentService } from "./Department.service";
import { Department } from "./Department.interface";
import { CreateDepartmentDTO } from "./CreateDepartmentDTO.dto";
import { UpdateDepartmentDTO } from "./UpdateDepartmentDTO.dto";

@Controller("department")
export class DepartmentController{
    constructor(
        private readonly departmentservice: DepartmentService
    ){}
    @Get()
    FindAll():Promise<Department[]>{
        return this.departmentservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createdepartmentdto:CreateDepartmentDTO):Promise<Department>{
        return this.departmentservice.Create(createdepartmentdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Department>{
        return this.departmentservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updatedepartmentdto:UpdateDepartmentDTO):
        Promise<Department>{
        return this.departmentservice.Update(id,updatedepartmentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Department>{
        return this.departmentservice.Remove(id);
    }

}