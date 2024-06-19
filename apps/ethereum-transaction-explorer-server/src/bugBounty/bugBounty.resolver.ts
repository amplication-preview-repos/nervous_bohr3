import * as graphql from "@nestjs/graphql";
import { BugBountyResolverBase } from "./base/bugBounty.resolver.base";
import { BugBounty } from "./base/BugBounty";
import { BugBountyService } from "./bugBounty.service";

@graphql.Resolver(() => BugBounty)
export class BugBountyResolver extends BugBountyResolverBase {
  constructor(protected readonly service: BugBountyService) {
    super(service);
  }
}
