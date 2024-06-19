import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StakingServiceBase } from "./base/staking.service.base";

@Injectable()
export class StakingService extends StakingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
