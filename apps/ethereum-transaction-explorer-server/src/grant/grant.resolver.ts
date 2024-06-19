import * as graphql from "@nestjs/graphql";
import { GrantResolverBase } from "./base/grant.resolver.base";
import { Grant } from "./base/Grant";
import { GrantService } from "./grant.service";

@graphql.Resolver(() => Grant)
export class GrantResolver extends GrantResolverBase {
  constructor(protected readonly service: GrantService) {
    super(service);
  }
}
