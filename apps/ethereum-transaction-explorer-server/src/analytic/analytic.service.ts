import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticServiceBase } from "./base/analytic.service.base";

@Injectable()
export class AnalyticService extends AnalyticServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
