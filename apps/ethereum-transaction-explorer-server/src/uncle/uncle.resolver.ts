import * as graphql from "@nestjs/graphql";
import { UncleResolverBase } from "./base/uncle.resolver.base";
import { Uncle } from "./base/Uncle";
import { UncleService } from "./uncle.service";

@graphql.Resolver(() => Uncle)
export class UncleResolver extends UncleResolverBase {
  constructor(protected readonly service: UncleService) {
    super(service);
  }
}
