import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RollupServiceBase } from "./base/rollup.service.base";

@Injectable()
export class RollupService extends RollupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
