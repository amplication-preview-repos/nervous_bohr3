import * as graphql from "@nestjs/graphql";
import { ShardResolverBase } from "./base/shard.resolver.base";
import { Shard } from "./base/Shard";
import { ShardService } from "./shard.service";

@graphql.Resolver(() => Shard)
export class ShardResolver extends ShardResolverBase {
  constructor(protected readonly service: ShardService) {
    super(service);
  }
}
