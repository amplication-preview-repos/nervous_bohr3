import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChainService } from "./chain.service";
import { ChainControllerBase } from "./base/chain.controller.base";

@swagger.ApiTags("chains")
@common.Controller("chains")
export class ChainController extends ChainControllerBase {
  constructor(protected readonly service: ChainService) {
    super(service);
  }
}
