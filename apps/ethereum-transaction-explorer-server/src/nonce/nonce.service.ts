import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NonceServiceBase } from "./base/nonce.service.base";

@Injectable()
export class NonceService extends NonceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
