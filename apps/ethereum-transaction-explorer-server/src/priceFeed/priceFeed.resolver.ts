import * as graphql from "@nestjs/graphql";
import { PriceFeedResolverBase } from "./base/priceFeed.resolver.base";
import { PriceFeed } from "./base/PriceFeed";
import { PriceFeedService } from "./priceFeed.service";

@graphql.Resolver(() => PriceFeed)
export class PriceFeedResolver extends PriceFeedResolverBase {
  constructor(protected readonly service: PriceFeedService) {
    super(service);
  }
}
