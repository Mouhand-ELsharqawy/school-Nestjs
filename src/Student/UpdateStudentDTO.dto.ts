import { PartialType } from "@nestjs/mapped-types"
import { CreateStudentDTO } from "./CreateStudentDTO.dto"

export class UpdateStudentDTO extends PartialType(CreateStudentDTO){}