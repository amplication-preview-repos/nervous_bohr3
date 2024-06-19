import { Module } from "@nestjs/common";
import { ZeroKnowledgeProofModuleBase } from "./base/zeroKnowledgeProof.module.base";
import { ZeroKnowledgeProofService } from "./zeroKnowledgeProof.service";
import { ZeroKnowledgeProofController } from "./zeroKnowledgeProof.controller";
import { ZeroKnowledgeProofResolver } from "./zeroKnowledgeProof.resolver";

@Module({
  imports: [ZeroKnowledgeProofModuleBase],
  controllers: [ZeroKnowledgeProofController],
  providers: [ZeroKnowledgeProofService, ZeroKnowledgeProofResolver],
  exports: [ZeroKnowledgeProofService],
})
export class ZeroKnowledgeProofModule {}
