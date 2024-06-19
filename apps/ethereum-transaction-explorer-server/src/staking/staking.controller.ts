import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StakingService } from "./staking.service";
import { StakingControllerBase } from "./base/staking.controller.base";

@swagger.ApiTags("stakings")
@common.Controller("stakings")
export class StakingController extends StakingControllerBase {
  constructor(protected readonly service: StakingService) {
    super(service);
  }
}
