import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeerServiceBase } from "./base/peer.service.base";

@Injectable()
export class PeerService extends PeerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
