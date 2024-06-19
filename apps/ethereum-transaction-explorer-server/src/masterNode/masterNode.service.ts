import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MasterNodeServiceBase } from "./base/masterNode.service.base";

@Injectable()
export class MasterNodeService extends MasterNodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
