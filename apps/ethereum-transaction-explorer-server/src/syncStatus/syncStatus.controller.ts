import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SyncStatusService } from "./syncStatus.service";
import { SyncStatusControllerBase } from "./base/syncStatus.controller.base";

@swagger.ApiTags("syncStatuses")
@common.Controller("syncStatuses")
export class SyncStatusController extends SyncStatusControllerBase {
  constructor(protected readonly service: SyncStatusService) {
    super(service);
  }
}
