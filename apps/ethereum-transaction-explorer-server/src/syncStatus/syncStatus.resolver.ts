import * as graphql from "@nestjs/graphql";
import { SyncStatusResolverBase } from "./base/syncStatus.resolver.base";
import { SyncStatus } from "./base/SyncStatus";
import { SyncStatusService } from "./syncStatus.service";

@graphql.Resolver(() => SyncStatus)
export class SyncStatusResolver extends SyncStatusResolverBase {
  constructor(protected readonly service: SyncStatusService) {
    super(service);
  }
}
