import { Module } from "@nestjs/common";
import { BugBountyModuleBase } from "./base/bugBounty.module.base";
import { BugBountyService } from "./bugBounty.service";
import { BugBountyController } from "./bugBounty.controller";
import { BugBountyResolver } from "./bugBounty.resolver";

@Module({
  imports: [BugBountyModuleBase],
  controllers: [BugBountyController],
  providers: [BugBountyService, BugBountyResolver],
  exports: [BugBountyService],
})
export class BugBountyModule {}
