import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BiddingService } from "./bidding.service";
import { BiddingControllerBase } from "./base/bidding.controller.base";

@swagger.ApiTags("biddings")
@common.Controller("biddings")
export class BiddingController extends BiddingControllerBase {
  constructor(protected readonly service: BiddingService) {
    super(service);
  }
}
