import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MultiSigService } from "./multiSig.service";
import { MultiSigControllerBase } from "./base/multiSig.controller.base";

@swagger.ApiTags("multiSigs")
@common.Controller("multiSigs")
export class MultiSigController extends MultiSigControllerBase {
  constructor(protected readonly service: MultiSigService) {
    super(service);
  }
}
