import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PendingTransactionService } from "./pendingTransaction.service";
import { PendingTransactionControllerBase } from "./base/pendingTransaction.controller.base";

@swagger.ApiTags("pendingTransactions")
@common.Controller("pendingTransactions")
export class PendingTransactionController extends PendingTransactionControllerBase {
  constructor(protected readonly service: PendingTransactionService) {
    super(service);
  }
}
