import { Module } from "@nestjs/common";
import { PlaygroundController } from "./Playground.controller";
import { PlaygroundService } from "./Playground.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PlaygrounClass, PlaygroundSchema } from "./Playground.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: PlaygrounClass.name,
        schema: PlaygroundSchema
    }]) ],
    controllers: [ PlaygroundController ],
    providers: [ PlaygroundService ]
})
export class PlaygroundModule{}