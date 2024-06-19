import { Module } from "@nestjs/common";
import { RollupModuleBase } from "./base/rollup.module.base";
import { RollupService } from "./rollup.service";
import { RollupController } from "./rollup.controller";
import { RollupResolver } from "./rollup.resolver";

@Module({
  imports: [RollupModuleBase],
  controllers: [RollupController],
  providers: [RollupService, RollupResolver],
  exports: [RollupService],
})
export class RollupModule {}
