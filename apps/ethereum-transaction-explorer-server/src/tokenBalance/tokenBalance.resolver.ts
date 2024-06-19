import * as graphql from "@nestjs/graphql";
import { TokenBalanceResolverBase } from "./base/tokenBalance.resolver.base";
import { TokenBalance } from "./base/TokenBalance";
import { TokenBalanceService } from "./tokenBalance.service";

@graphql.Resolver(() => TokenBalance)
export class TokenBalanceResolver extends TokenBalanceResolverBase {
  constructor(protected readonly service: TokenBalanceService) {
    super(service);
  }
}
