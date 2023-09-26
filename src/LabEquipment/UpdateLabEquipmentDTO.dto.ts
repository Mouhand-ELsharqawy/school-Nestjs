import { PartialType } from "@nestjs/mapped-types"
import { CreateLabEquipmentDTO } from "./CreateLabEquipmentDTO.dto"

export class UpdateLabEquipmentDTO extends PartialType(CreateLabEquipmentDTO){}