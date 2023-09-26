import { Schema, Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class ManagementClass extends Document{
    @Prop({ required: true })
    SchoolName:string;
    @Prop({ required: true })
    SchoolAddress:string;
    @Prop({ required: true })
    ContactNumber:string;
    @Prop({ required: true })
    MediumOfStudy:string;
}

export const ManagementSchema = SchemaFactory.createForClass(ManagementClass);