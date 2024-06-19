import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MasterNodeService } from "./masterNode.service";
import { MasterNodeControllerBase } from "./base/masterNode.controller.base";

@swagger.ApiTags("masterNodes")
@common.Controller("masterNodes")
export class MasterNodeController extends MasterNodeControllerBase {
  constructor(protected readonly service: MasterNodeService) {
    super(service);
  }
}
