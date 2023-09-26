import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { BusService } from "./Bus.service";
import { Bus } from "./Bus.interface";
import { CreateBusDTO } from "./CreateBusDTO.dto";
import { UpdateBusDTO } from "./UpdateBusDTO.dto";

@Controller('bus')
export class BusController{
    constructor(
        private readonly busservice: BusService
    ){}
    @Get()
    FindAll():Promise<Bus[]>{
        return this.busservice.FindAll();
    }
    @Post()
    Create(@Body(
        ValidationPipe
        ) createbusdto: CreateBusDTO ): Promise<Bus>{
            return this.busservice.Create(createbusdto);
        }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Bus>{
        return this.busservice.FindOne(id);
    }
    @Patch(":id")
    Update(@Body(
        ValidationPipe
        ) updatebusdto:UpdateBusDTO, 
        @Param("id") id:string): 
        Promise<Bus>{
        return this.busservice.Update(id,updatebusdto);
    }

    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Bus>{
        return this.busservice.Remove(id);
    }
}