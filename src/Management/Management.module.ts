import { Module } from "@nestjs/common";
import { ManagementController } from "./Management.controller";
import { ManagementService } from "./Management.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ManagementClass, ManagementSchema } from "./Management.schema";

@Module({
    imports: [ MongooseModule.forFeature([{
        name: ManagementClass.name,
        schema: ManagementSchema
    }]) ],
    controllers: [ ManagementController ],
    providers: [ ManagementService ]
})
export class ManagementModule{}