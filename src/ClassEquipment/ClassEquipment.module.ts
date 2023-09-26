import { Module } from "@nestjs/common";
import { ClassEquipmentController } from "./ClassEquipment.controller";
import { ClassEquipmentService } from "./ClassEquipment.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ClassEquipmentClass, ClassEquipmentSchema } from "./ClassEquipment.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: ClassEquipmentClass.name,
        schema:ClassEquipmentSchema
    }]) ],
    controllers: [ ClassEquipmentController ],
    providers: [ ClassEquipmentService ]
})
export class ClassEquipmentModule{}