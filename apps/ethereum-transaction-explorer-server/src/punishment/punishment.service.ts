import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PunishmentServiceBase } from "./base/punishment.service.base";

@Injectable()
export class PunishmentService extends PunishmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
