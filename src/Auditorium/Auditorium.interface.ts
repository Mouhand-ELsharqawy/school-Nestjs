import { UUID } from "crypto";


export interface Auditorium{
    TotalSeats:number,
    SeatsOccupied:number,
    EventName:string,
    EventDate:Date,
    EventTime:string
}