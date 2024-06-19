import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BugBountyService } from "./bugBounty.service";
import { BugBountyControllerBase } from "./base/bugBounty.controller.base";

@swagger.ApiTags("bugBounties")
@common.Controller("bugBounties")
export class BugBountyController extends BugBountyControllerBase {
  constructor(protected readonly service: BugBountyService) {
    super(service);
  }
}
