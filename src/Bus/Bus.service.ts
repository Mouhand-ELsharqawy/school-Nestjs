import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BusClass } from "./Bus.schema";
import { Model } from "mongoose";
import { Bus } from "./Bus.interface";
import { CreateBusDTO } from "./CreateBusDTO.dto";
import { UpdateBusDTO } from "./UpdateBusDTO.dto";

@Injectable()
export class BusService{
    constructor(
        @InjectModel(BusClass.name)
        private readonly BusModel: Model<BusClass>
    ){}

    async FindAll():Promise<Bus[]>{
        return await this.BusModel.find().exec()
    }
    async Create( createbusdto:CreateBusDTO ): Promise<Bus>{
        try{
            return await this.BusModel.create(createbusdto);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async FindOne(id:string): Promise<Bus>{
        try{
            return await this.BusModel.findById(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Update(id:string, updatebusdto:UpdateBusDTO):Promise<Bus>{
        try{
            return await this.BusModel.findByIdAndUpdate(id,updatebusdto,{
                new: true
            });
        }catch(err){
            throw new NotFoundException();
        }
    }
    async Remove(id:string):Promise<Bus>{
        try{
            return await this.BusModel.findByIdAndRemove(id);
        }catch(err){
            throw new NotFoundException();
        }
    }
}