import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ForkService } from "./fork.service";
import { ForkControllerBase } from "./base/fork.controller.base";

@swagger.ApiTags("forks")
@common.Controller("forks")
export class ForkController extends ForkControllerBase {
  constructor(protected readonly service: ForkService) {
    super(service);
  }
}
