import { Module } from "@nestjs/common";
import { TokenTransferModuleBase } from "./base/tokenTransfer.module.base";
import { TokenTransferService } from "./tokenTransfer.service";
import { TokenTransferController } from "./tokenTransfer.controller";
import { TokenTransferResolver } from "./tokenTransfer.resolver";

@Module({
  imports: [TokenTransferModuleBase],
  controllers: [TokenTransferController],
  providers: [TokenTransferService, TokenTransferResolver],
  exports: [TokenTransferService],
})
export class TokenTransferModule {}
