import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PriceFeedServiceBase } from "./base/priceFeed.service.base";

@Injectable()
export class PriceFeedService extends PriceFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
