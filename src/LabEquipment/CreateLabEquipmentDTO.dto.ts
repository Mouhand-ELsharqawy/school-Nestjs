import { IsString, IsNumber } from "class-validator"

export class CreateLabEquipmentDTO{
    @IsString()
    Name:string;
    @IsNumber()
    Count:number;
}