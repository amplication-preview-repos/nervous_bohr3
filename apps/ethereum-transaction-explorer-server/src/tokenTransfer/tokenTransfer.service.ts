import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenTransferServiceBase } from "./base/tokenTransfer.service.base";

@Injectable()
export class TokenTransferService extends TokenTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
