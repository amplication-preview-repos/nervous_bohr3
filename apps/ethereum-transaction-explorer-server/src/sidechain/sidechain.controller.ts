import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SidechainService } from "./sidechain.service";
import { SidechainControllerBase } from "./base/sidechain.controller.base";

@swagger.ApiTags("sidechains")
@common.Controller("sidechains")
export class SidechainController extends SidechainControllerBase {
  constructor(protected readonly service: SidechainService) {
    super(service);
  }
}
