import { Module } from "@nestjs/common";
import { LabEquipmentController } from "./LabEquipment.controller";
import { LabEquipmentService } from "./LabEquipment.service";
import { MongooseModule } from "@nestjs/mongoose";
import { LabEquipmentClass, LabEquipmentSchema } from "./LabEquipment.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: LabEquipmentClass.name,
        schema: LabEquipmentSchema
    }]) ],
    controllers: [ LabEquipmentController ],
    providers: [ LabEquipmentService ]
})
export class LabEquipmentModule{}