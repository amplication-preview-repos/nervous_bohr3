import * as graphql from "@nestjs/graphql";
import { BiddingResolverBase } from "./base/bidding.resolver.base";
import { Bidding } from "./base/Bidding";
import { BiddingService } from "./bidding.service";

@graphql.Resolver(() => Bidding)
export class BiddingResolver extends BiddingResolverBase {
  constructor(protected readonly service: BiddingService) {
    super(service);
  }
}
