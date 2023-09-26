import { PartialType } from "@nestjs/mapped-types"
import { CreateManagementDTO } from "./CreateManagementDTO.dto"

export class UpdateManagementDTo extends PartialType(CreateManagementDTO){}