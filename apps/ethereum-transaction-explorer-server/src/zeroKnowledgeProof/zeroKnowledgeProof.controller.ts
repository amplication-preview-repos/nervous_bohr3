import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ZeroKnowledgeProofService } from "./zeroKnowledgeProof.service";
import { ZeroKnowledgeProofControllerBase } from "./base/zeroKnowledgeProof.controller.base";

@swagger.ApiTags("zeroKnowledgeProofs")
@common.Controller("zeroKnowledgeProofs")
export class ZeroKnowledgeProofController extends ZeroKnowledgeProofControllerBase {
  constructor(protected readonly service: ZeroKnowledgeProofService) {
    super(service);
  }
}
