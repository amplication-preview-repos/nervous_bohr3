import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkServiceBase } from "./base/network.service.base";

@Injectable()
export class NetworkService extends NetworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
