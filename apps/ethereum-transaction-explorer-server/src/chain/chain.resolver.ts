import * as graphql from "@nestjs/graphql";
import { ChainResolverBase } from "./base/chain.resolver.base";
import { Chain } from "./base/Chain";
import { ChainService } from "./chain.service";

@graphql.Resolver(() => Chain)
export class ChainResolver extends ChainResolverBase {
  constructor(protected readonly service: ChainService) {
    super(service);
  }
}
