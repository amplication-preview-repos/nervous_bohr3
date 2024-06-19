import { Module } from "@nestjs/common";
import { SyncStatusModuleBase } from "./base/syncStatus.module.base";
import { SyncStatusService } from "./syncStatus.service";
import { SyncStatusController } from "./syncStatus.controller";
import { SyncStatusResolver } from "./syncStatus.resolver";

@Module({
  imports: [SyncStatusModuleBase],
  controllers: [SyncStatusController],
  providers: [SyncStatusService, SyncStatusResolver],
  exports: [SyncStatusService],
})
export class SyncStatusModule {}
