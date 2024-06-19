import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PunishmentService } from "./punishment.service";
import { PunishmentControllerBase } from "./base/punishment.controller.base";

@swagger.ApiTags("punishments")
@common.Controller("punishments")
export class PunishmentController extends PunishmentControllerBase {
  constructor(protected readonly service: PunishmentService) {
    super(service);
  }
}
