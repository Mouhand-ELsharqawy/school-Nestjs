import { PartialType } from "@nestjs/mapped-types";
import { CreateAuditoriomDTO } from "./createAuditoriumDTO.dto";

export class UpdateAuditoriumDTO extends PartialType(CreateAuditoriomDTO){}