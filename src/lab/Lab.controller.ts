import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { LabService } from "./Lab.service";
import { Lab } from "./Lab.interface";
import { CreateLabDTO } from "./CreateLabDTO.dto";
import { UpdateLabDTO } from "./UpdateLabDTO.dto";

@Controller("lab")
export class LabController{
    constructor( private readonly labservice:LabService ){}
    @Get()
    FindAll():Promise<Lab[]>{
        return this.labservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createlabdto:CreateLabDTO):Promise<Lab>{
        return this.labservice.Create(createlabdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Lab>{
        return this.labservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string,
        @Body(
            ValidationPipe
            ) updatelabdto:UpdateLabDTO):Promise<Lab>{
                return this.labservice.Update(id,updatelabdto);
    }
    @Delete("id")
    Remove(@Param("id") id:string):Promise<Lab>{
        return this.labservice.Remove(id);
    }
}