import * as graphql from "@nestjs/graphql";
import { BridgeResolverBase } from "./base/bridge.resolver.base";
import { Bridge } from "./base/Bridge";
import { BridgeService } from "./bridge.service";

@graphql.Resolver(() => Bridge)
export class BridgeResolver extends BridgeResolverBase {
  constructor(protected readonly service: BridgeService) {
    super(service);
  }
}
