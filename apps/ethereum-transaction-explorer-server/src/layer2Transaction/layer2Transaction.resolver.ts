import * as graphql from "@nestjs/graphql";
import { Layer2TransactionResolverBase } from "./base/layer2Transaction.resolver.base";
import { Layer2Transaction } from "./base/Layer2Transaction";
import { Layer2TransactionService } from "./layer2Transaction.service";

@graphql.Resolver(() => Layer2Transaction)
export class Layer2TransactionResolver extends Layer2TransactionResolverBase {
  constructor(protected readonly service: Layer2TransactionService) {
    super(service);
  }
}
