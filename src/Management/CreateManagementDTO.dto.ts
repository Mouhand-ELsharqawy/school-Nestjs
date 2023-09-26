import { IsString } from "class-validator"

export class CreateManagementDTO{
    @IsString()
    SchoolName:string;
    @IsString()
    SchoolAddress:string;
    @IsString()
    ContactNumber:string;
    @IsString()
    MediumOfStudy:string;
}