import { Module } from "@nestjs/common";
import { BridgeModuleBase } from "./base/bridge.module.base";
import { BridgeService } from "./bridge.service";
import { BridgeController } from "./bridge.controller";
import { BridgeResolver } from "./bridge.resolver";

@Module({
  imports: [BridgeModuleBase],
  controllers: [BridgeController],
  providers: [BridgeService, BridgeResolver],
  exports: [BridgeService],
})
export class BridgeModule {}
