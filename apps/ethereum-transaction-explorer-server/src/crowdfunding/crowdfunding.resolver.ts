import * as graphql from "@nestjs/graphql";
import { CrowdfundingResolverBase } from "./base/crowdfunding.resolver.base";
import { Crowdfunding } from "./base/Crowdfunding";
import { CrowdfundingService } from "./crowdfunding.service";

@graphql.Resolver(() => Crowdfunding)
export class CrowdfundingResolver extends CrowdfundingResolverBase {
  constructor(protected readonly service: CrowdfundingService) {
    super(service);
  }
}
