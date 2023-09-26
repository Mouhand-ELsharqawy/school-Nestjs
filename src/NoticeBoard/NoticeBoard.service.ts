import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { NoticeBoardClass } from "./NoticeBoard.schema";
import { Model } from "mongoose";
import { NoticeBoard } from "./NoticeBoard.interface";
import { CreateNoticeBoardDTO } from "./CreateNoticeBoardDTO.dto";
import { UpdateNoticeBoard } from "./UpdateNoticeBoardDTO.dto";

@Injectable()
export class NoticeBoardService{
    constructor(
        @InjectModel(NoticeBoardClass.name)
        private readonly NoticeBoardModel: Model<NoticeBoardClass>
    ){}
    async FindAll():Promise<NoticeBoard[]>{
        return await this.NoticeBoardModel.find().exec()
    }
    async Create(createnoticeboarddto:CreateNoticeBoardDTO): Promise<NoticeBoard>{
        try{
            return await this.NoticeBoardModel.create(createnoticeboarddto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string): Promise<NoticeBoard>{
        try{
            return await this.NoticeBoardModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatenoticeboarddto:UpdateNoticeBoard): Promise<NoticeBoard>{
        try{
            return await this.NoticeBoardModel.findByIdAndUpdate(id,updatenoticeboarddto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string): Promise<NoticeBoard>{
        try{
            return await this.NoticeBoardModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}