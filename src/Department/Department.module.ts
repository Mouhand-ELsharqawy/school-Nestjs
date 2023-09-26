import { Module } from "@nestjs/common";
import { DepartmentController } from "./Department.controller";
import { DepartmentService } from "./Department.service";
import { MongooseModule } from "@nestjs/mongoose";
import { DepartmentClass, DepartmentSchema } from "./Department.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: DepartmentClass.name,
        schema: DepartmentSchema
    }]) ],
    controllers:[ DepartmentController ],
    providers:[DepartmentService]
})
export class DepartmentModule{}