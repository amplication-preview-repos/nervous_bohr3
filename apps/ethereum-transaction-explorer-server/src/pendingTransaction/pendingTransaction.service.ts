import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PendingTransactionServiceBase } from "./base/pendingTransaction.service.base";

@Injectable()
export class PendingTransactionService extends PendingTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
