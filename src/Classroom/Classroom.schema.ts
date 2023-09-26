import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import mongoose from "mongoose";
import { EmployeeClass } from "src/Employee/Employee.schema";
import { EquipmentClass } from "src/Equipment/Equipment.schema";
@Schema()
export class ClassroomClass extends Document{
    @Prop({ required: true })
    ClassName:string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:EmployeeClass.name })
    TeacherId: string;
    @Prop({ required: true })
    StudentCount:number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: EquipmentClass.name })
    EquipmentId: string;
}

export const ClassroomSchema = SchemaFactory.createForClass(ClassroomClass);