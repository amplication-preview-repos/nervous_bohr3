import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GovernanceServiceBase } from "./base/governance.service.base";

@Injectable()
export class GovernanceService extends GovernanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
