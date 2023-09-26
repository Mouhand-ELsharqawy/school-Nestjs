import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { AuditoriomSchema, AuditoriumClass } from "./Auditorium.schema";
import { AuditoriumController } from "./Auditorium.controller";
import { AuditoriomService } from "./Auditorium.service";
@Module({
    imports:[ 
        MongooseModule.forFeature([{
            name: AuditoriumClass.name,
            schema: AuditoriomSchema
        }])
     ],
     controllers:[AuditoriumController],
     providers:[AuditoriomService]
})
export class AuditoriomModule{}