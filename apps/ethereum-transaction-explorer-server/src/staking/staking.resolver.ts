import * as graphql from "@nestjs/graphql";
import { StakingResolverBase } from "./base/staking.resolver.base";
import { Staking } from "./base/Staking";
import { StakingService } from "./staking.service";

@graphql.Resolver(() => Staking)
export class StakingResolver extends StakingResolverBase {
  constructor(protected readonly service: StakingService) {
    super(service);
  }
}
