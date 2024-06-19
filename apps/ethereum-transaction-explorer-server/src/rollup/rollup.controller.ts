import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RollupService } from "./rollup.service";
import { RollupControllerBase } from "./base/rollup.controller.base";

@swagger.ApiTags("rollups")
@common.Controller("rollups")
export class RollupController extends RollupControllerBase {
  constructor(protected readonly service: RollupService) {
    super(service);
  }
}
