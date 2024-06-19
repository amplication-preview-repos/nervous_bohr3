import * as graphql from "@nestjs/graphql";
import { RollupResolverBase } from "./base/rollup.resolver.base";
import { Rollup } from "./base/Rollup";
import { RollupService } from "./rollup.service";

@graphql.Resolver(() => Rollup)
export class RollupResolver extends RollupResolverBase {
  constructor(protected readonly service: RollupService) {
    super(service);
  }
}
