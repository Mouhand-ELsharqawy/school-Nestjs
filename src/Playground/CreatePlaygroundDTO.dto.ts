import { IsString } from "class-validator"

export class CreatePlaygroundDTO{
    @IsString()
    Area:string;
    @IsString()
    ClassId:string;
}