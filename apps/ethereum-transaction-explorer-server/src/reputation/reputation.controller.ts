import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReputationService } from "./reputation.service";
import { ReputationControllerBase } from "./base/reputation.controller.base";

@swagger.ApiTags("reputations")
@common.Controller("reputations")
export class ReputationController extends ReputationControllerBase {
  constructor(protected readonly service: ReputationService) {
    super(service);
  }
}
