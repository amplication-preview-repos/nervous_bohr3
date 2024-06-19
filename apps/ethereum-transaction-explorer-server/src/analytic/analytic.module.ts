import { Module } from "@nestjs/common";
import { AnalyticModuleBase } from "./base/analytic.module.base";
import { AnalyticService } from "./analytic.service";
import { AnalyticController } from "./analytic.controller";
import { AnalyticResolver } from "./analytic.resolver";

@Module({
  imports: [AnalyticModuleBase],
  controllers: [AnalyticController],
  providers: [AnalyticService, AnalyticResolver],
  exports: [AnalyticService],
})
export class AnalyticModule {}
