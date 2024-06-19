import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrossChainTransactionService } from "./crossChainTransaction.service";
import { CrossChainTransactionControllerBase } from "./base/crossChainTransaction.controller.base";

@swagger.ApiTags("crossChainTransactions")
@common.Controller("crossChainTransactions")
export class CrossChainTransactionController extends CrossChainTransactionControllerBase {
  constructor(protected readonly service: CrossChainTransactionService) {
    super(service);
  }
}
