import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class NoticeBoardClass extends Document{
    @Prop({ required: true })
    NewsList:string;
    @Prop({ required: true })
    InchargeName:string;
}

export const NoticeBoardSchema = SchemaFactory.createForClass(NoticeBoardClass);