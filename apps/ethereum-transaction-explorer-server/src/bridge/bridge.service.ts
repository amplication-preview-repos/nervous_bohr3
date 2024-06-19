import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BridgeServiceBase } from "./base/bridge.service.base";

@Injectable()
export class BridgeService extends BridgeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
