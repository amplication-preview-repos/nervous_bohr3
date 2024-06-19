import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenBalanceService } from "./tokenBalance.service";
import { TokenBalanceControllerBase } from "./base/tokenBalance.controller.base";

@swagger.ApiTags("tokenBalances")
@common.Controller("tokenBalances")
export class TokenBalanceController extends TokenBalanceControllerBase {
  constructor(protected readonly service: TokenBalanceService) {
    super(service);
  }
}
