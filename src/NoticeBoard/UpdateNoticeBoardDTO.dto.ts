import { PartialType } from "@nestjs/mapped-types"
import { CreateNoticeBoardDTO } from "./CreateNoticeBoardDTO.dto"

export class UpdateNoticeBoard extends PartialType(CreateNoticeBoardDTO){}