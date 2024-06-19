import { Module } from "@nestjs/common";
import { ReputationModuleBase } from "./base/reputation.module.base";
import { ReputationService } from "./reputation.service";
import { ReputationController } from "./reputation.controller";
import { ReputationResolver } from "./reputation.resolver";

@Module({
  imports: [ReputationModuleBase],
  controllers: [ReputationController],
  providers: [ReputationService, ReputationResolver],
  exports: [ReputationService],
})
export class ReputationModule {}
