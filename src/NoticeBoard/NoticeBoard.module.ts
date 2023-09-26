import { Module } from "@nestjs/common";
import { NoticeBoardController } from "./NoticeBoard.controller";
import { NoticeBoardService } from "./NoticeBoard.service";
import { MongooseModule } from "@nestjs/mongoose";
import { NoticeBoardClass, NoticeBoardSchema } from "./NoticeBoard.schema";

@Module({
    imports: [ MongooseModule.forFeature([{
        name: NoticeBoardClass.name,
        schema: NoticeBoardSchema
    }]) ],
    controllers: [ NoticeBoardController ],
    providers: [ NoticeBoardService ]
})
export class NoticeBoardModule{}