import { Schema, Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class DepartmentClass extends Document{
    @Prop({ required: true })
    DepartmentName:string;
    @Prop({ required: true })
    InchargeName:string;
    @Prop({ required: true })
    MemberList:string;
}

export const DepartmentSchema = SchemaFactory.createForClass(DepartmentClass);