import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KycService } from "./kyc.service";
import { KycControllerBase } from "./base/kyc.controller.base";

@swagger.ApiTags("kycs")
@common.Controller("kycs")
export class KycController extends KycControllerBase {
  constructor(protected readonly service: KycService) {
    super(service);
  }
}
