import * as graphql from "@nestjs/graphql";
import { OrphanedBlockResolverBase } from "./base/orphanedBlock.resolver.base";
import { OrphanedBlock } from "./base/OrphanedBlock";
import { OrphanedBlockService } from "./orphanedBlock.service";

@graphql.Resolver(() => OrphanedBlock)
export class OrphanedBlockResolver extends OrphanedBlockResolverBase {
  constructor(protected readonly service: OrphanedBlockService) {
    super(service);
  }
}
