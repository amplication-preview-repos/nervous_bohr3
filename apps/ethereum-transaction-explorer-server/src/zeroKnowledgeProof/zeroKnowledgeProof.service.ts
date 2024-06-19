import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ZeroKnowledgeProofServiceBase } from "./base/zeroKnowledgeProof.service.base";

@Injectable()
export class ZeroKnowledgeProofService extends ZeroKnowledgeProofServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
