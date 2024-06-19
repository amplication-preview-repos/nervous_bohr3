import * as graphql from "@nestjs/graphql";
import { ValidatorRewardResolverBase } from "./base/validatorReward.resolver.base";
import { ValidatorReward } from "./base/ValidatorReward";
import { ValidatorRewardService } from "./validatorReward.service";

@graphql.Resolver(() => ValidatorReward)
export class ValidatorRewardResolver extends ValidatorRewardResolverBase {
  constructor(protected readonly service: ValidatorRewardService) {
    super(service);
  }
}
