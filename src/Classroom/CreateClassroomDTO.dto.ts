import { IsString, IsNumber } from "class-validator"

export class CreateClassroomDTO{
    @IsString()
    ClassName:string;
    @IsString()
    TeacherId:string;
    @IsNumber()
    StudentCount:number;
    @IsString()
    EquipmentId:string;
}