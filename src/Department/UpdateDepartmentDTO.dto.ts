import { PartialType } from "@nestjs/mapped-types"
import { CreateDepartmentDTO } from "./CreateDepartmentDTO.dto";

export class UpdateDepartmentDTO extends PartialType(CreateDepartmentDTO){}