import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PlaygrounClass } from "./Playground.schema";
import { Model } from "mongoose";
import { Playground } from "./Playground.interface";
import { CreatePlaygroundDTO } from "./CreatePlaygroundDTO.dto";
import { UpdatePalygroundDTO } from "./UpdatePlaygroundDTO.dto";

@Injectable()
export class PlaygroundService{
    constructor(
        @InjectModel(PlaygrounClass.name)
        private readonly PlaygrounModel: Model<PlaygrounClass>
    ){}
    async FindAll():Promise<Playground[]>{
        return await this.PlaygrounModel.find().exec();
    }
    async Create(createplygrounddto:CreatePlaygroundDTO): Promise<Playground>{
        try{
            return await this.PlaygrounModel.create(createplygrounddto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string):Promise<Playground>{
        try{
            return await this.PlaygrounModel.findById(id)
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updateplaygrounddto:UpdatePalygroundDTO):Promise<Playground>{
        try{
            return await this.PlaygrounModel.findByIdAndUpdate(id,updateplaygrounddto,{
                new:true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Playground>{
        try{
            return await this.PlaygrounModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }

}