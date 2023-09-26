import { Module } from "@nestjs/common";
import { LabController } from "./Lab.controller";
import { LabService } from "./Lab.service";
import { MongooseModule } from "@nestjs/mongoose";
import { LabClass, LabSchema } from "./Lab.schema";

@Module({
    imports: [ MongooseModule.forFeature([{
        name: LabClass.name,
        schema: LabSchema
    }]) ],
    controllers: [ LabController ],
    providers: [ LabService ]
})
export class LabModule{}