import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkService } from "./network.service";
import { NetworkControllerBase } from "./base/network.controller.base";

@swagger.ApiTags("networks")
@common.Controller("networks")
export class NetworkController extends NetworkControllerBase {
  constructor(protected readonly service: NetworkService) {
    super(service);
  }
}
