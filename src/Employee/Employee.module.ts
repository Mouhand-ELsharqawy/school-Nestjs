import { Module } from "@nestjs/common";
import { EmployeeController } from "./Employee.controller";
import { EmployeeService } from "./Employee.service";
import { MongooseModule } from "@nestjs/mongoose";
import { EmployeeClass, EmployeeSchema } from "./Employee.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: EmployeeClass.name,
        schema: EmployeeSchema
    }]) ],
    controllers: [ EmployeeController ],
    providers: [EmployeeService]
})
export class EmployeeModule{}