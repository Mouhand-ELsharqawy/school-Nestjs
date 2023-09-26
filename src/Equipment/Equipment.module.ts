import { Module } from "@nestjs/common";
import { EquipmentController } from "./Equipment.controller";
import { EquipmentService } from "./Equipment.service";
import { MongooseModule } from "@nestjs/mongoose";
import { EquipmentClass, EquipmentSchema } from "./Equipment.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: EquipmentClass.name,
        schema: EquipmentSchema
    }]) ],
    controllers: [ EquipmentController ],
    providers: [EquipmentService]
})
export class EquipmentModule{}