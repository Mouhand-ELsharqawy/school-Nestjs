import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { EmployeeService } from "./Employee.service";
import { Employee } from "./Employee.interface";
import { CreateEmployeeDTO } from "./CreateEmployeeDTO.dto";
import { UpdateEmployeeDTO } from "./UUpdateEmployeeDTO.dto";

@Controller("employee")
export class EmployeeController{
    constructor(
        private readonly employeeservice:EmployeeService
    ){}
    @Get()
    FindAll():Promise<Employee[]>{
        return this.employeeservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createemployeedto:CreateEmployeeDTO):Promise<Employee>{
        return this.employeeservice.Create(createemployeedto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Employee>{
        return this.employeeservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateemployeedto:UpdateEmployeeDTO):
            Promise<Employee>{
        return this.employeeservice.Update(id,updateemployeedto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Employee>{
        return this.employeeservice.Remove(id);
    }
}