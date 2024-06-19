import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BugBountyServiceBase } from "./base/bugBounty.service.base";

@Injectable()
export class BugBountyService extends BugBountyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
