import { Schema,Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { DepartmentClass } from "src/Department/Department.schema";
import mongoose from "mongoose";

@Schema()
export class EmployeeClass extends Document{
    @Prop({ required: true })
    Name:string;
    @Prop({ required: true })
    Salary:number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: DepartmentClass.name })
    DepartmentId:string
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeClass);