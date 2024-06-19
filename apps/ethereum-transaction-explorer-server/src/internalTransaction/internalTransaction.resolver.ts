import * as graphql from "@nestjs/graphql";
import { InternalTransactionResolverBase } from "./base/internalTransaction.resolver.base";
import { InternalTransaction } from "./base/InternalTransaction";
import { InternalTransactionService } from "./internalTransaction.service";

@graphql.Resolver(() => InternalTransaction)
export class InternalTransactionResolver extends InternalTransactionResolverBase {
  constructor(protected readonly service: InternalTransactionService) {
    super(service);
  }
}
