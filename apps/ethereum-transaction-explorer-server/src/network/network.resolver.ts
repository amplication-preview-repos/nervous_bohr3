import * as graphql from "@nestjs/graphql";
import { NetworkResolverBase } from "./base/network.resolver.base";
import { Network } from "./base/Network";
import { NetworkService } from "./network.service";

@graphql.Resolver(() => Network)
export class NetworkResolver extends NetworkResolverBase {
  constructor(protected readonly service: NetworkService) {
    super(service);
  }
}
