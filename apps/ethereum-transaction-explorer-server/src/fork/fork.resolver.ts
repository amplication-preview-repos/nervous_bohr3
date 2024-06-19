import * as graphql from "@nestjs/graphql";
import { ForkResolverBase } from "./base/fork.resolver.base";
import { Fork } from "./base/Fork";
import { ForkService } from "./fork.service";

@graphql.Resolver(() => Fork)
export class ForkResolver extends ForkResolverBase {
  constructor(protected readonly service: ForkService) {
    super(service);
  }
}
