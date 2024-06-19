import * as graphql from "@nestjs/graphql";
import { PendingTransactionResolverBase } from "./base/pendingTransaction.resolver.base";
import { PendingTransaction } from "./base/PendingTransaction";
import { PendingTransactionService } from "./pendingTransaction.service";

@graphql.Resolver(() => PendingTransaction)
export class PendingTransactionResolver extends PendingTransactionResolverBase {
  constructor(protected readonly service: PendingTransactionService) {
    super(service);
  }
}
