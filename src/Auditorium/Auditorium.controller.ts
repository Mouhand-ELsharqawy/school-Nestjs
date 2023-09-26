import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AuditoriomService } from './Auditorium.service';
import { Auditorium } from './Auditorium.interface';
import { CreateAuditoriomDTO } from './createAuditoriumDTO.dto';
import { UpdateAuditoriumDTO } from './UpdateAuditoriumDTO.dto';
@Controller('auditorium')
export class AuditoriumController{
    constructor( private readonly auditoriumservice:AuditoriomService ){}

    @Get()
    FindAll(): Promise<Auditorium[]>{
      return  this.auditoriumservice.FindAll();
    }
    @Post()
    Create(@Body(
        ValidationPipe
        ) createauditoriumdto:CreateAuditoriomDTO): Promise<Auditorium>{
            return this.auditoriumservice.Create(createauditoriumdto);
        }
    @Get(":id")
    FindOne(@Param("id") id: string): Promise<Auditorium>{
        return this.auditoriumservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updateauditoriumdto:UpdateAuditoriumDTO):
            Promise<Auditorium>{
        return this.auditoriumservice.Update(id,updateauditoriumdto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string): Promise<Auditorium>{
        return this.auditoriumservice.Remove(id);
    }

}