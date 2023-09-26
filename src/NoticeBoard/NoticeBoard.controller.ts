import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { NoticeBoardService } from "./NoticeBoard.service";
import { NoticeBoard } from "./NoticeBoard.interface";
import { CreateNoticeBoardDTO } from "./CreateNoticeBoardDTO.dto";
import { UpdateNoticeBoard } from "./UpdateNoticeBoardDTO.dto";

@Controller()
export class NoticeBoardController{
    constructor(
        private readonly noticeboardservice:NoticeBoardService
    ){}
    @Get()
    FindAll():Promise<NoticeBoard[]>{
        return this.noticeboardservice.FindAll();
    }
    @Post()
    Create(@Body(ValidationPipe) createnoticeboarddto:CreateNoticeBoardDTO):Promise<NoticeBoard>{
        return this.noticeboardservice.Create(createnoticeboarddto);
    }
    @Get(":id")
    FindOne(@Param("id") id:string):Promise<NoticeBoard>{
        return this.noticeboardservice.FindOne(id);
    }
    @Patch(":id")
    Update(
        @Param("id") id:string, 
        @Body(
            ValidationPipe
            ) updatenoticeboarddto:UpdateNoticeBoard):
            Promise<NoticeBoard>{
        return this.noticeboardservice.Update(id,updatenoticeboarddto);
    }
    @Delete(":id")
    Remove(@Param("id") id:string):Promise<NoticeBoard>{
        return this.noticeboardservice.Remove(id);
    }
}