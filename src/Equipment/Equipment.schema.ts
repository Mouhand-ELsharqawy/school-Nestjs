import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class EquipmentClass extends Document{
    @Prop({ required: true })
    Name:string;
    @Prop({ required: true })
    Cost:number
}

export const EquipmentSchema = SchemaFactory.createForClass(EquipmentClass);