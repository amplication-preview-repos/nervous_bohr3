import * as graphql from "@nestjs/graphql";
import { MinerResolverBase } from "./base/miner.resolver.base";
import { Miner } from "./base/Miner";
import { MinerService } from "./miner.service";

@graphql.Resolver(() => Miner)
export class MinerResolver extends MinerResolverBase {
  constructor(protected readonly service: MinerService) {
    super(service);
  }
}
