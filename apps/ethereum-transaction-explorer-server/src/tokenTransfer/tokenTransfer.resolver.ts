import * as graphql from "@nestjs/graphql";
import { TokenTransferResolverBase } from "./base/tokenTransfer.resolver.base";
import { TokenTransfer } from "./base/TokenTransfer";
import { TokenTransferService } from "./tokenTransfer.service";

@graphql.Resolver(() => TokenTransfer)
export class TokenTransferResolver extends TokenTransferResolverBase {
  constructor(protected readonly service: TokenTransferService) {
    super(service);
  }
}
