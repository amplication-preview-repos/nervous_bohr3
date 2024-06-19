import * as graphql from "@nestjs/graphql";
import { PeerResolverBase } from "./base/peer.resolver.base";
import { Peer } from "./base/Peer";
import { PeerService } from "./peer.service";

@graphql.Resolver(() => Peer)
export class PeerResolver extends PeerResolverBase {
  constructor(protected readonly service: PeerService) {
    super(service);
  }
}
