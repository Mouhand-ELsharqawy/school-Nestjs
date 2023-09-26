import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ClassroomClass } from "src/Classroom/Classroom.schema";
import mongoose from "mongoose";

@Schema()
export class PlaygrounClass extends Document{
    @Prop({ required: true })
    Area:string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ClassroomClass.name })
    ClassId:string;
}

export const PlaygroundSchema = SchemaFactory.createForClass(PlaygrounClass);