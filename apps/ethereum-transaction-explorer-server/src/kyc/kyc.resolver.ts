import * as graphql from "@nestjs/graphql";
import { KycResolverBase } from "./base/kyc.resolver.base";
import { Kyc } from "./base/Kyc";
import { KycService } from "./kyc.service";

@graphql.Resolver(() => Kyc)
export class KycResolver extends KycResolverBase {
  constructor(protected readonly service: KycService) {
    super(service);
  }
}
