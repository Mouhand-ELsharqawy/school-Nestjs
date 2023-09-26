import { PartialType } from "@nestjs/mapped-types"
import { CreateClassroomDTO } from "./CreateClassroomDTO.dto"

export class UpdateClassDTO extends PartialType(CreateClassroomDTO){}