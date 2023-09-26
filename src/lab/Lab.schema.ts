import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EquipmentClass } from "src/Equipment/Equipment.schema";
import mongoose from "mongoose";

export class LabClass extends Document{
    @Prop({ required: true })
    Name:string;
    @Prop({ required: true })
    ChargeIn:Date;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: EquipmentClass.name })
    EquipmentId: string;
}

export const LabSchema = SchemaFactory.createForClass(LabClass);