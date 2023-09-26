import  { IsString, IsDate } from "class-validator"

export class CreateLabDTO{
    @IsString()
    Name:string;
    @IsDate()
    ChargeIn:Date;
    @IsString()
    EquipmentId:string
}