import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ClassroomClass } from "src/Classroom/Classroom.schema";
import { BusClass } from "src/Bus/Bus.schema";
import mongoose from "mongoose";


@Schema()
export class StudentClass extends Document{
    @Prop({ required: true })
    Name:string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ClassroomClass.name, required: true })
    ClassId: string;
    @Prop({ required: true })
    Section:string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: BusClass.name, required: true })
    BusId: string;
}

export const StudentSchema = SchemaFactory.createForClass(StudentClass);