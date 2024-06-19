import { Module } from "@nestjs/common";
import { InternalTransactionModuleBase } from "./base/internalTransaction.module.base";
import { InternalTransactionService } from "./internalTransaction.service";
import { InternalTransactionController } from "./internalTransaction.controller";
import { InternalTransactionResolver } from "./internalTransaction.resolver";

@Module({
  imports: [InternalTransactionModuleBase],
  controllers: [InternalTransactionController],
  providers: [InternalTransactionService, InternalTransactionResolver],
  exports: [InternalTransactionService],
})
export class InternalTransactionModule {}
