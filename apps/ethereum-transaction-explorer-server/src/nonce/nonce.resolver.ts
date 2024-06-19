import * as graphql from "@nestjs/graphql";
import { NonceResolverBase } from "./base/nonce.resolver.base";
import { Nonce } from "./base/Nonce";
import { NonceService } from "./nonce.service";

@graphql.Resolver(() => Nonce)
export class NonceResolver extends NonceResolverBase {
  constructor(protected readonly service: NonceService) {
    super(service);
  }
}
