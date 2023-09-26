import { IsString } from "class-validator"

export class CreateNoticeBoardDTO{
    @IsString()
    NewsList:string;
    @IsString()
    InchargeName:string;
}