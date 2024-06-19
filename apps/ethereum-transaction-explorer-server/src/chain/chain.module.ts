import { Module } from "@nestjs/common";
import { ChainModuleBase } from "./base/chain.module.base";
import { ChainService } from "./chain.service";
import { ChainController } from "./chain.controller";
import { ChainResolver } from "./chain.resolver";

@Module({
  imports: [ChainModuleBase],
  controllers: [ChainController],
  providers: [ChainService, ChainResolver],
  exports: [ChainService],
})
export class ChainModule {}
