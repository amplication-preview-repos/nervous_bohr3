import { Module } from "@nestjs/common";
import { ValidatorRewardModuleBase } from "./base/validatorReward.module.base";
import { ValidatorRewardService } from "./validatorReward.service";
import { ValidatorRewardController } from "./validatorReward.controller";
import { ValidatorRewardResolver } from "./validatorReward.resolver";

@Module({
  imports: [ValidatorRewardModuleBase],
  controllers: [ValidatorRewardController],
  providers: [ValidatorRewardService, ValidatorRewardResolver],
  exports: [ValidatorRewardService],
})
export class ValidatorRewardModule {}
