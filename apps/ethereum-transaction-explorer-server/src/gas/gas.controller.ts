import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GasService } from "./gas.service";
import { GasControllerBase } from "./base/gas.controller.base";

@swagger.ApiTags("gases")
@common.Controller("gases")
export class GasController extends GasControllerBase {
  constructor(protected readonly service: GasService) {
    super(service);
  }
}
