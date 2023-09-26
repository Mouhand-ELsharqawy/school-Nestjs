import { IsString } from "class-validator"

export class CreateStudentDTO{
    @IsString()
    Name:string;
    @IsString()
    ClassId:string;
    @IsString()
    Section:string;
    @IsString()
    BusId:string;
}