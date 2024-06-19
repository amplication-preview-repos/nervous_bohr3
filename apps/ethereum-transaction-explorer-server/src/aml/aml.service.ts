import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmlServiceBase } from "./base/aml.service.base";

@Injectable()
export class AmlService extends AmlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
