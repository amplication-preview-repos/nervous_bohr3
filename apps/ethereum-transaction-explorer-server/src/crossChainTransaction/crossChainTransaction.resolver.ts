import * as graphql from "@nestjs/graphql";
import { CrossChainTransactionResolverBase } from "./base/crossChainTransaction.resolver.base";
import { CrossChainTransaction } from "./base/CrossChainTransaction";
import { CrossChainTransactionService } from "./crossChainTransaction.service";

@graphql.Resolver(() => CrossChainTransaction)
export class CrossChainTransactionResolver extends CrossChainTransactionResolverBase {
  constructor(protected readonly service: CrossChainTransactionService) {
    super(service);
  }
}
