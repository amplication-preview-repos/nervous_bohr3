import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KycServiceBase } from "./base/kyc.service.base";

@Injectable()
export class KycService extends KycServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
