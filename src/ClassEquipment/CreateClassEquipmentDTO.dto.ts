import { IsString,IsNumber } from "class-validator"

export class CreateClassEquipmentDTO{
    @IsString()
    ClassId:string;
    @IsNumber()
    BenchCount:number;
    @IsNumber()
    FanCount:number;
    @IsNumber()
    LightCount:number;
}