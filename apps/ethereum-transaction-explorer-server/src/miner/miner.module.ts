import { Module } from "@nestjs/common";
import { MinerModuleBase } from "./base/miner.module.base";
import { MinerService } from "./miner.service";
import { MinerController } from "./miner.controller";
import { MinerResolver } from "./miner.resolver";

@Module({
  imports: [MinerModuleBase],
  controllers: [MinerController],
  providers: [MinerService, MinerResolver],
  exports: [MinerService],
})
export class MinerModule {}
