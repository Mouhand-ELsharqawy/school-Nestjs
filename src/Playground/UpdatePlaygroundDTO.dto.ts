import { PartialType } from "@nestjs/mapped-types"
import { CreatePlaygroundDTO } from "./CreatePlaygroundDTO.dto"

export class UpdatePalygroundDTO extends PartialType(CreatePlaygroundDTO){}