import { IsString, IsNumber } from "class-validator"

export class CreateEquipmentDTO{
    @IsString()
    Name:string;
    @IsNumber()
    Cost:number;
}