import { Module } from "@nestjs/common";
import { TransactionAuditModuleBase } from "./base/transactionAudit.module.base";
import { TransactionAuditService } from "./transactionAudit.service";
import { TransactionAuditController } from "./transactionAudit.controller";
import { TransactionAuditResolver } from "./transactionAudit.resolver";

@Module({
  imports: [TransactionAuditModuleBase],
  controllers: [TransactionAuditController],
  providers: [TransactionAuditService, TransactionAuditResolver],
  exports: [TransactionAuditService],
})
export class TransactionAuditModule {}
