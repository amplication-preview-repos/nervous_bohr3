import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OffChainDataServiceBase } from "./base/offChainData.service.base";

@Injectable()
export class OffChainDataService extends OffChainDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
