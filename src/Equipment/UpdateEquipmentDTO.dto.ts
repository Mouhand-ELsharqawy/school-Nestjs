import { PartialType } from "@nestjs/mapped-types";
import { CreateEquipmentDTO } from "./CreateEquipmentDTO.dto";

export class UpdateEquipmentDTO extends PartialType(CreateEquipmentDTO){}