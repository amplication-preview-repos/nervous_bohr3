import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MultiSigServiceBase } from "./base/multiSig.service.base";

@Injectable()
export class MultiSigService extends MultiSigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
