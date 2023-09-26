import { IsString, IsNumber } from "class-validator"

export class CreateEmployeeDTO{
    @IsString()
    Name:string;
    @IsNumber()
    Salary:number;
    @IsString()
    DepartmentId:string;
}