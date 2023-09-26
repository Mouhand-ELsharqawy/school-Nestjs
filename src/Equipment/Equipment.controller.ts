import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { EquipmentService } from "./Equipment.service";
import { Equipment } from "./Equipment.interface";
import { CreateEquipmentDTO } from "./CreateEquipmentDTO.dto";
import { UpdateEquipmentDTO } from "./UpdateEquipmentDTO.dto";

@Controller("equipment")
export class EquipmentController{
    constructor(
        private readonly equipmentservice:EquipmentService
    ){}
    @Get()
    FindAll():Promise<Equipment[]>{
        return this.equipmentservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createequipmentdto: CreateEquipmentDTO):Promise<Equipment>{
        return this.equipmentservice.Create(createequipmentdto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Equipment>{
        return this.equipmentservice.FindOne(id);
    }
    @Patch(":d")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateequipmentdto:UpdateEquipmentDTO):
            Promise<Equipment>{
                return this.equipmentservice.Update(id,updateequipmentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Equipment>{
        return this.equipmentservice.Remove(id);
    }
}