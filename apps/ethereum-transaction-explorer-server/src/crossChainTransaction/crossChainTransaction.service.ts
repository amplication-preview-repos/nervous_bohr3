import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrossChainTransactionServiceBase } from "./base/crossChainTransaction.service.base";

@Injectable()
export class CrossChainTransactionService extends CrossChainTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
