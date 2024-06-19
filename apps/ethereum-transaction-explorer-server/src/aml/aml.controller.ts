import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AmlService } from "./aml.service";
import { AmlControllerBase } from "./base/aml.controller.base";

@swagger.ApiTags("amls")
@common.Controller("amls")
export class AmlController extends AmlControllerBase {
  constructor(protected readonly service: AmlService) {
    super(service);
  }
}
