import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticService } from "./analytic.service";
import { AnalyticControllerBase } from "./base/analytic.controller.base";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticController extends AnalyticControllerBase {
  constructor(protected readonly service: AnalyticService) {
    super(service);
  }
}
