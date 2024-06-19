import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GovernanceService } from "./governance.service";
import { GovernanceControllerBase } from "./base/governance.controller.base";

@swagger.ApiTags("governances")
@common.Controller("governances")
export class GovernanceController extends GovernanceControllerBase {
  constructor(protected readonly service: GovernanceService) {
    super(service);
  }
}
