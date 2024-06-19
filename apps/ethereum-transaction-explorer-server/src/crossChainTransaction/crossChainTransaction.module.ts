import { Module } from "@nestjs/common";
import { CrossChainTransactionModuleBase } from "./base/crossChainTransaction.module.base";
import { CrossChainTransactionService } from "./crossChainTransaction.service";
import { CrossChainTransactionController } from "./crossChainTransaction.controller";
import { CrossChainTransactionResolver } from "./crossChainTransaction.resolver";

@Module({
  imports: [CrossChainTransactionModuleBase],
  controllers: [CrossChainTransactionController],
  providers: [CrossChainTransactionService, CrossChainTransactionResolver],
  exports: [CrossChainTransactionService],
})
export class CrossChainTransactionModule {}
