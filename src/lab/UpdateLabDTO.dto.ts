import { PartialType } from "@nestjs/mapped-types"
import { CreateLabDTO } from "./CreateLabDTO.dto"

export class UpdateLabDTO extends PartialType(CreateLabDTO){}