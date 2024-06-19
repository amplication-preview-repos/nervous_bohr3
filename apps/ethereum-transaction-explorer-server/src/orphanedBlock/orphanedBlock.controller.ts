import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrphanedBlockService } from "./orphanedBlock.service";
import { OrphanedBlockControllerBase } from "./base/orphanedBlock.controller.base";

@swagger.ApiTags("orphanedBlocks")
@common.Controller("orphanedBlocks")
export class OrphanedBlockController extends OrphanedBlockControllerBase {
  constructor(protected readonly service: OrphanedBlockService) {
    super(service);
  }
}
