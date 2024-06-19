import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternalTransactionServiceBase } from "./base/internalTransaction.service.base";

@Injectable()
export class InternalTransactionService extends InternalTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
