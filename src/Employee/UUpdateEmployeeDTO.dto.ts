import { PartialType } from "@nestjs/mapped-types"
import { CreateEmployeeDTO } from "./CreateEmployeeDTO.dto";

export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO){}