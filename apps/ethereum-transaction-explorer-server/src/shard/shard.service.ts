import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShardServiceBase } from "./base/shard.service.base";

@Injectable()
export class ShardService extends ShardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
