import { Module } from "@nestjs/common";
import { PendingTransactionModuleBase } from "./base/pendingTransaction.module.base";
import { PendingTransactionService } from "./pendingTransaction.service";
import { PendingTransactionController } from "./pendingTransaction.controller";
import { PendingTransactionResolver } from "./pendingTransaction.resolver";

@Module({
  imports: [PendingTransactionModuleBase],
  controllers: [PendingTransactionController],
  providers: [PendingTransactionService, PendingTransactionResolver],
  exports: [PendingTransactionService],
})
export class PendingTransactionModule {}
