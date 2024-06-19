import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SyncStatusServiceBase } from "./base/syncStatus.service.base";

@Injectable()
export class SyncStatusService extends SyncStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
