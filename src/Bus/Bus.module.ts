import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { BusController } from "./Bus.controller";
import { BusService } from "./Bus.service";
import { BusClass, BusSchema } from "./Bus.schema";

@Module({
    imports: [ MongooseModule.forFeature([{
        name: BusClass.name,
        schema: BusSchema
    }]) ],
    controllers:[ BusController ],
    providers:[ BusService ]
})
export class BusModule{}