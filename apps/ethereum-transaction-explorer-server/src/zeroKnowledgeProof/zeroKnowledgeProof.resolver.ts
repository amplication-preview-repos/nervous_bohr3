import * as graphql from "@nestjs/graphql";
import { ZeroKnowledgeProofResolverBase } from "./base/zeroKnowledgeProof.resolver.base";
import { ZeroKnowledgeProof } from "./base/ZeroKnowledgeProof";
import { ZeroKnowledgeProofService } from "./zeroKnowledgeProof.service";

@graphql.Resolver(() => ZeroKnowledgeProof)
export class ZeroKnowledgeProofResolver extends ZeroKnowledgeProofResolverBase {
  constructor(protected readonly service: ZeroKnowledgeProofService) {
    super(service);
  }
}
