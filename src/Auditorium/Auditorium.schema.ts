import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class AuditoriumClass extends Document{
    @Prop({ required: true})
    TotalSeats:number;
    @Prop({ required:true })
    SeatsOccupied:number;
    @Prop({ required: true })
    EventName:string;
    @Prop({ required:true })
    EventDate:Date;
    @Prop({ required: true })
    EventTime:string;
}

export const AuditoriomSchema = SchemaFactory.createForClass(AuditoriumClass)