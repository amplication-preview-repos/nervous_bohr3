import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChainServiceBase } from "./base/chain.service.base";

@Injectable()
export class ChainService extends ChainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
