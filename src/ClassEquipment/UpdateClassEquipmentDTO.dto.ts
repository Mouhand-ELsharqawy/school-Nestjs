import { PartialType } from "@nestjs/mapped-types"
import { CreateClassEquipmentDTO } from "./CreateClassEquipmentDTO.dto";

export class UpdateClassEquipment extends PartialType(CreateClassEquipmentDTO){}