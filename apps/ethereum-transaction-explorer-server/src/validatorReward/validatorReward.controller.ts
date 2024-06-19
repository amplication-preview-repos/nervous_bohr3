import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ValidatorRewardService } from "./validatorReward.service";
import { ValidatorRewardControllerBase } from "./base/validatorReward.controller.base";

@swagger.ApiTags("validatorRewards")
@common.Controller("validatorRewards")
export class ValidatorRewardController extends ValidatorRewardControllerBase {
  constructor(protected readonly service: ValidatorRewardService) {
    super(service);
  }
}
