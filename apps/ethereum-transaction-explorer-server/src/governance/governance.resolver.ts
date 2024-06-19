import * as graphql from "@nestjs/graphql";
import { GovernanceResolverBase } from "./base/governance.resolver.base";
import { Governance } from "./base/Governance";
import { GovernanceService } from "./governance.service";

@graphql.Resolver(() => Governance)
export class GovernanceResolver extends GovernanceResolverBase {
  constructor(protected readonly service: GovernanceService) {
    super(service);
  }
}
