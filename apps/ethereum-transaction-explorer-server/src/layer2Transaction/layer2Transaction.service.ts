import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Layer2TransactionServiceBase } from "./base/layer2Transaction.service.base";

@Injectable()
export class Layer2TransactionService extends Layer2TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
