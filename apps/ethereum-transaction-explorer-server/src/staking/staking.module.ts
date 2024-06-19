import { Module } from "@nestjs/common";
import { StakingModuleBase } from "./base/staking.module.base";
import { StakingService } from "./staking.service";
import { StakingController } from "./staking.controller";
import { StakingResolver } from "./staking.resolver";

@Module({
  imports: [StakingModuleBase],
  controllers: [StakingController],
  providers: [StakingService, StakingResolver],
  exports: [StakingService],
})
export class StakingModule {}
