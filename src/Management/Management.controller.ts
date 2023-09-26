import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { ManagementService } from "./Management.service";
import { Managment } from "./Management.interface";
import { CreateManagementDTO } from "./CreateManagementDTO.dto";
import { UpdateManagementDTo } from "./UpdateManagementDTO.dto";

@Controller("management")
export class ManagementController{
    constructor(
        private readonly managementservice:ManagementService
    ){}
    @Get()
    FindAll():Promise<Managment[]>{
        return this.managementservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createmanagmentdto:CreateManagementDTO):Promise<Managment>{
        return this.managementservice.Create(createmanagmentdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Managment>{
        return this.managementservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string,
        @Body(
            ValidationPipe
            ) updatemanagmentdto:UpdateManagementDTo):Promise<Managment>{
        return this.managementservice.Update(id,updatemanagmentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Managment>{
        return this.managementservice.Remove(id);
    }
}