import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ValidatorSlashService } from "./validatorSlash.service";
import { ValidatorSlashControllerBase } from "./base/validatorSlash.controller.base";

@swagger.ApiTags("validatorSlashes")
@common.Controller("validatorSlashes")
export class ValidatorSlashController extends ValidatorSlashControllerBase {
  constructor(protected readonly service: ValidatorSlashService) {
    super(service);
  }
}
