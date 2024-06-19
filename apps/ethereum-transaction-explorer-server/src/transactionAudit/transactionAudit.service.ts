import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionAuditServiceBase } from "./base/transactionAudit.service.base";

@Injectable()
export class TransactionAuditService extends TransactionAuditServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
