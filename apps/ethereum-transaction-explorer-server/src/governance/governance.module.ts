import { Module } from "@nestjs/common";
import { GovernanceModuleBase } from "./base/governance.module.base";
import { GovernanceService } from "./governance.service";
import { GovernanceController } from "./governance.controller";
import { GovernanceResolver } from "./governance.resolver";

@Module({
  imports: [GovernanceModuleBase],
  controllers: [GovernanceController],
  providers: [GovernanceService, GovernanceResolver],
  exports: [GovernanceService],
})
export class GovernanceModule {}
