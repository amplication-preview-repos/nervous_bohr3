import * as graphql from "@nestjs/graphql";
import { MultiSigResolverBase } from "./base/multiSig.resolver.base";
import { MultiSig } from "./base/MultiSig";
import { MultiSigService } from "./multiSig.service";

@graphql.Resolver(() => MultiSig)
export class MultiSigResolver extends MultiSigResolverBase {
  constructor(protected readonly service: MultiSigService) {
    super(service);
  }
}
