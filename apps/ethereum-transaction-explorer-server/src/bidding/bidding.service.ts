import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiddingServiceBase } from "./base/bidding.service.base";

@Injectable()
export class BiddingService extends BiddingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
