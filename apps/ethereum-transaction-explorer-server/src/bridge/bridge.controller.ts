import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BridgeService } from "./bridge.service";
import { BridgeControllerBase } from "./base/bridge.controller.base";

@swagger.ApiTags("bridges")
@common.Controller("bridges")
export class BridgeController extends BridgeControllerBase {
  constructor(protected readonly service: BridgeService) {
    super(service);
  }
}
