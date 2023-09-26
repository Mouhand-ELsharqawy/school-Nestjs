import { Module } from "@nestjs/common";
import { StudentController } from "./Student.controller";
import { StudentService } from "./Student.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentClass, StudentSchema } from "./Student.schema";

@Module({
    imports: [ MongooseModule.forFeature([{
        name: StudentClass.name,
        schema: StudentSchema
    }]) ],
    controllers: [ StudentController],
    providers: [ StudentService ]
})
export class StudentModule{}