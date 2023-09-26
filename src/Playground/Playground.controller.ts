import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { PlaygroundService } from "./Playground.service";
import { Playground } from "./Playground.interface";
import { CreatePlaygroundDTO } from "./CreatePlaygroundDTO.dto";
import { UpdatePalygroundDTO } from "./UpdatePlaygroundDTO.dto";

@Controller()
export class PlaygroundController{
    constructor(
        private readonly playgroundservice:PlaygroundService
    ){}
    @Get()
    FindAll():Promise<Playground[]>{
        return this.playgroundservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createplaygrounddto:CreatePlaygroundDTO):Promise<Playground>{
        return this.playgroundservice.Create(createplaygrounddto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<Playground>{
        return this.playgroundservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateplaygroundto:UpdatePalygroundDTO):Promise<Playground>{
        return this.playgroundservice.Update(id,updateplaygroundto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<Playground>{
        return this.playgroundservice.Remove(id);
    }
}