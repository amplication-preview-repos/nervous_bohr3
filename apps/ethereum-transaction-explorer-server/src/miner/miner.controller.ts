import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MinerService } from "./miner.service";
import { MinerControllerBase } from "./base/miner.controller.base";

@swagger.ApiTags("miners")
@common.Controller("miners")
export class MinerController extends MinerControllerBase {
  constructor(protected readonly service: MinerService) {
    super(service);
  }
}
