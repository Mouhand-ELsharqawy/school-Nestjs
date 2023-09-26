import { IsString } from "class-validator"

export class CreateDepartmentDTO{
    @IsString()
    DepartmentName:string;
    @IsString()
    InchargeName:string;
    @IsString()
    MemberList:string;
}