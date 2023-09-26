import { IsNumber,IsString ,IsDate  } from "class-validator";

export class CreateAuditoriomDTO{
    @IsNumber()
    TotalSeats:number;
    @IsNumber()
    SeatsOccupied:number;
    @IsString()
    EventName:string;
    @IsDate()
    EventDate:Date;
    @IsString()
    EventTime:string;
}