import * as graphql from "@nestjs/graphql";
import { SidechainResolverBase } from "./base/sidechain.resolver.base";
import { Sidechain } from "./base/Sidechain";
import { SidechainService } from "./sidechain.service";

@graphql.Resolver(() => Sidechain)
export class SidechainResolver extends SidechainResolverBase {
  constructor(protected readonly service: SidechainService) {
    super(service);
  }
}
