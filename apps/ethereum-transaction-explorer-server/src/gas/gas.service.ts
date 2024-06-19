import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GasServiceBase } from "./base/gas.service.base";

@Injectable()
export class GasService extends GasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
