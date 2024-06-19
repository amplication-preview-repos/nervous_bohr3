import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrowdfundingServiceBase } from "./base/crowdfunding.service.base";

@Injectable()
export class CrowdfundingService extends CrowdfundingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
