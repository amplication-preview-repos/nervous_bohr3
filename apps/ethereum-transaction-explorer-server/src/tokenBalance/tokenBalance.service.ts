import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenBalanceServiceBase } from "./base/tokenBalance.service.base";

@Injectable()
export class TokenBalanceService extends TokenBalanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
