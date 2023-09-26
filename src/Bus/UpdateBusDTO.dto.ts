import { PartialType } from "@nestjs/mapped-types"
import { CreateBusDTO } from "./CreateBusDTO.dto"

export class UpdateBusDTO extends PartialType(CreateBusDTO){}