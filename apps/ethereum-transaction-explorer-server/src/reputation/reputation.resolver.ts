import * as graphql from "@nestjs/graphql";
import { ReputationResolverBase } from "./base/reputation.resolver.base";
import { Reputation } from "./base/Reputation";
import { ReputationService } from "./reputation.service";

@graphql.Resolver(() => Reputation)
export class ReputationResolver extends ReputationResolverBase {
  constructor(protected readonly service: ReputationService) {
    super(service);
  }
}
