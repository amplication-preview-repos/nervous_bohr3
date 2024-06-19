import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OffChainDataService } from "./offChainData.service";
import { OffChainDataControllerBase } from "./base/offChainData.controller.base";

@swagger.ApiTags("offChainData")
@common.Controller("offChainData")
export class OffChainDataController extends OffChainDataControllerBase {
  constructor(protected readonly service: OffChainDataService) {
    super(service);
  }
}
