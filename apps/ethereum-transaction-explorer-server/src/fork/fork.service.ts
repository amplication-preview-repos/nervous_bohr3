import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ForkServiceBase } from "./base/fork.service.base";

@Injectable()
export class ForkService extends ForkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
