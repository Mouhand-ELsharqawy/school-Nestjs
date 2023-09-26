import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { LabEquipmentService } from "./LabEquipment.service";
import { LabEquipment } from "./LabEquipment.interface";
import { CreateLabEquipmentDTO } from "./CreateLabEquipmentDTO.dto";
import { UpdateLabEquipmentDTO } from "./UpdateLabEquipmentDTO.dto";

@Controller("labequipment")
export class LabEquipmentController{
    constructor(
        private readonly labequipmentservice:LabEquipmentService
    ){}
    @Get()
    FindAll():Promise<LabEquipment[]>{
        return this.labequipmentservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createlabequipment:CreateLabEquipmentDTO):Promise<LabEquipment>{
        return this.labequipmentservice.Create(createlabequipment);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<LabEquipment>{
        return this.labequipmentservice.FindOne(id);
    }
    @Patch(":id")
    Update(@Param("id") id:string, @Body(ValidationPipe) updatelabequipmentdto:UpdateLabEquipmentDTO):Promise<LabEquipment>{
        return this.labequipmentservice.Update(id,updatelabequipmentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<LabEquipment>{
        return this.labequipmentservice.Remove(id);
    }

}