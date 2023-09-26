import { IsString, IsNumber } from "class-validator"
export class CreateBusDTO{
    @IsString()
    DriverId:string;
    @IsString()
    AreaList:string;
    @IsString()
    BusNumber:string;
    @IsNumber()
    Capasity:number
}