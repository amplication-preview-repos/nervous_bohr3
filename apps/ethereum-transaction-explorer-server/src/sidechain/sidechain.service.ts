import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SidechainServiceBase } from "./base/sidechain.service.base";

@Injectable()
export class SidechainService extends SidechainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
