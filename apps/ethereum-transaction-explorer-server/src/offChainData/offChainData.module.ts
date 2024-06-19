import { Module } from "@nestjs/common";
import { OffChainDataModuleBase } from "./base/offChainData.module.base";
import { OffChainDataService } from "./offChainData.service";
import { OffChainDataController } from "./offChainData.controller";
import { OffChainDataResolver } from "./offChainData.resolver";

@Module({
  imports: [OffChainDataModuleBase],
  controllers: [OffChainDataController],
  providers: [OffChainDataService, OffChainDataResolver],
  exports: [OffChainDataService],
})
export class OffChainDataModule {}
