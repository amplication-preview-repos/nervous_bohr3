import { Module } from "@nestjs/common";
import { CrowdfundingModuleBase } from "./base/crowdfunding.module.base";
import { CrowdfundingService } from "./crowdfunding.service";
import { CrowdfundingController } from "./crowdfunding.controller";
import { CrowdfundingResolver } from "./crowdfunding.resolver";

@Module({
  imports: [CrowdfundingModuleBase],
  controllers: [CrowdfundingController],
  providers: [CrowdfundingService, CrowdfundingResolver],
  exports: [CrowdfundingService],
})
export class CrowdfundingModule {}
