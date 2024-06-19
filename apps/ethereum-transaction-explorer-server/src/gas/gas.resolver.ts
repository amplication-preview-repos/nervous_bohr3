import * as graphql from "@nestjs/graphql";
import { GasResolverBase } from "./base/gas.resolver.base";
import { Gas } from "./base/Gas";
import { GasService } from "./gas.service";

@graphql.Resolver(() => Gas)
export class GasResolver extends GasResolverBase {
  constructor(protected readonly service: GasService) {
    super(service);
  }
}
