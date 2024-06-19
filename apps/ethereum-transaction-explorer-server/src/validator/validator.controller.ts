import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ValidatorService } from "./validator.service";
import { ValidatorControllerBase } from "./base/validator.controller.base";

@swagger.ApiTags("validators")
@common.Controller("validators")
export class ValidatorController extends ValidatorControllerBase {
  constructor(protected readonly service: ValidatorService) {
    super(service);
  }
}
