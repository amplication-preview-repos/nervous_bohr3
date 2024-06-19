import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceFeedService } from "./priceFeed.service";
import { PriceFeedControllerBase } from "./base/priceFeed.controller.base";

@swagger.ApiTags("priceFeeds")
@common.Controller("priceFeeds")
export class PriceFeedController extends PriceFeedControllerBase {
  constructor(protected readonly service: PriceFeedService) {
    super(service);
  }
}
