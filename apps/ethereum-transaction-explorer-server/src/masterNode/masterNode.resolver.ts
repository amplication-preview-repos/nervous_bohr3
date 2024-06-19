import * as graphql from "@nestjs/graphql";
import { MasterNodeResolverBase } from "./base/masterNode.resolver.base";
import { MasterNode } from "./base/MasterNode";
import { MasterNodeService } from "./masterNode.service";

@graphql.Resolver(() => MasterNode)
export class MasterNodeResolver extends MasterNodeResolverBase {
  constructor(protected readonly service: MasterNodeService) {
    super(service);
  }
}
