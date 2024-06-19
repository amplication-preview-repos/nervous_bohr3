import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NonceService } from "./nonce.service";
import { NonceControllerBase } from "./base/nonce.controller.base";

@swagger.ApiTags("nonces")
@common.Controller("nonces")
export class NonceController extends NonceControllerBase {
  constructor(protected readonly service: NonceService) {
    super(service);
  }
}
