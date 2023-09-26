import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class LabEquipmentClass extends Document{
    @Prop({ required: true })
    Name:string;
    @Prop({ required: true })
    Count:number;
}

export const LabEquipmentSchema = SchemaFactory.createForClass(LabEquipmentClass);