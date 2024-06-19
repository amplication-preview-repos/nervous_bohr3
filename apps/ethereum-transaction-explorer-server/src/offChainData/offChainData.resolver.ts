import * as graphql from "@nestjs/graphql";
import { OffChainDataResolverBase } from "./base/offChainData.resolver.base";
import { OffChainData } from "./base/OffChainData";
import { OffChainDataService } from "./offChainData.service";

@graphql.Resolver(() => OffChainData)
export class OffChainDataResolver extends OffChainDataResolverBase {
  constructor(protected readonly service: OffChainDataService) {
    super(service);
  }
}
