import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UncleServiceBase } from "./base/uncle.service.base";

@Injectable()
export class UncleService extends UncleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
