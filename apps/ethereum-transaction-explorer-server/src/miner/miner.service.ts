import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MinerServiceBase } from "./base/miner.service.base";

@Injectable()
export class MinerService extends MinerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
