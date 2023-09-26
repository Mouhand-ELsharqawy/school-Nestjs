import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import mongoose from "mongoose";
import { ClassroomClass } from "src/Classroom/Classroom.schema";

export class ClassEquipmentClass extends Document{
    @Prop({ type:mongoose.Schema.Types.ObjectId, ref:'ClassroomClass' })
    ClassId: string ;
    @Prop({ required: true })
    BenchCount:number;
    @Prop({ required: true })
    FanCount:number;
    @Prop({ required: true })
    LightCount:number;
}

export const ClassEquipmentSchema = SchemaFactory.createForClass(ClassEquipmentClass);