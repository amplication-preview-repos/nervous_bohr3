import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternalTransactionService } from "./internalTransaction.service";
import { InternalTransactionControllerBase } from "./base/internalTransaction.controller.base";

@swagger.ApiTags("internalTransactions")
@common.Controller("internalTransactions")
export class InternalTransactionController extends InternalTransactionControllerBase {
  constructor(protected readonly service: InternalTransactionService) {
    super(service);
  }
}
