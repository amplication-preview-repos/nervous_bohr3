import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenTransferService } from "./tokenTransfer.service";
import { TokenTransferControllerBase } from "./base/tokenTransfer.controller.base";

@swagger.ApiTags("tokenTransfers")
@common.Controller("tokenTransfers")
export class TokenTransferController extends TokenTransferControllerBase {
  constructor(protected readonly service: TokenTransferService) {
    super(service);
  }
}
