import { Module } from "@nestjs/common";
import { SidechainModuleBase } from "./base/sidechain.module.base";
import { SidechainService } from "./sidechain.service";
import { SidechainController } from "./sidechain.controller";
import { SidechainResolver } from "./sidechain.resolver";

@Module({
  imports: [SidechainModuleBase],
  controllers: [SidechainController],
  providers: [SidechainService, SidechainResolver],
  exports: [SidechainService],
})
export class SidechainModule {}
