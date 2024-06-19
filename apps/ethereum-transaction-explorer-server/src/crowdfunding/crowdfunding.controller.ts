import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrowdfundingService } from "./crowdfunding.service";
import { CrowdfundingControllerBase } from "./base/crowdfunding.controller.base";

@swagger.ApiTags("crowdfundings")
@common.Controller("crowdfundings")
export class CrowdfundingController extends CrowdfundingControllerBase {
  constructor(protected readonly service: CrowdfundingService) {
    super(service);
  }
}
