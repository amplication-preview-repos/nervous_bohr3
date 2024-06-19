import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UncleService } from "./uncle.service";
import { UncleControllerBase } from "./base/uncle.controller.base";

@swagger.ApiTags("uncles")
@common.Controller("uncles")
export class UncleController extends UncleControllerBase {
  constructor(protected readonly service: UncleService) {
    super(service);
  }
}
