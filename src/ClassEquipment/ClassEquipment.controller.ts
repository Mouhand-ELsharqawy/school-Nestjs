import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { ClassEquipmentService } from "./ClassEquipment.service";
import { ClassEquipment } from "./ClassEquipment.interface";
import { CreateClassEquipmentDTO } from "./CreateClassEquipmentDTO.dto";
import { UpdateClassEquipment } from "./UpdateClassEquipmentDTO.dto";

@Controller("classroomequipment")
export class ClassEquipmentController{
    constructor(
        private readonly classequipmentservice:ClassEquipmentService
    ){}
    @Get()
    FindAll():Promise<ClassEquipment[]>{
        return this.classequipmentservice.FindAll();
    }
    @Post()
    Create(@Body(
        ValidationPipe)
         createclassequipmentdto: CreateClassEquipmentDTO):
         Promise<ClassEquipment>{
            return this.classequipmentservice.Create(createclassequipmentdto)
         }
    @Get(":id")
    FindOne(@Param("id") id:string):
    Promise<ClassEquipment>{
        return this.classequipmentservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(ValidationPipe) updateclassequipmentdto:UpdateClassEquipment ):
        Promise<ClassEquipment>{
        return this.classequipmentservice.Update(id,updateclassequipmentdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<ClassEquipment>{
        return this.classequipmentservice.Remove(id);
    }
}