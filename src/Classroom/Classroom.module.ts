import { Module } from "@nestjs/common";
import { ClassroomController } from "./Classroom.controller";
import { ClassroomService } from "./Classroom.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ClassroomClass, ClassroomSchema } from "./Classroom.schema";

@Module({
    imports:[ MongooseModule.forFeature([{
        name: ClassroomClass.name,
        schema: ClassroomSchema
    }]) ],
    controllers: [ ClassroomController ],
    providers: [ ClassroomService ]
})
export class ClassroomModule{}