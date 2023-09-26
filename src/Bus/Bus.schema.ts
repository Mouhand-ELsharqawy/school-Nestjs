import { Schema ,Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import mongoose from "mongoose";
import { EmployeeClass } from "src/Employee/Employee.schema";


@Schema()
export class BusClass extends Document{
    @Prop({ type: mongoose.Schema.Types.ObjectId , ref: EmployeeClass.name })
    DriverId: string;
    @Prop({ required: true })
    AreaList:string;
    @Prop({ required: true })
    BusNumber:string;
    @Prop({ required: true })
    Capasity:number;
}

export const BusSchema = SchemaFactory.createForClass(BusClass);