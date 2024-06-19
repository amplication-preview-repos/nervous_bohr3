import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Layer2TransactionService } from "./layer2Transaction.service";
import { Layer2TransactionControllerBase } from "./base/layer2Transaction.controller.base";

@swagger.ApiTags("layer2Transactions")
@common.Controller("layer2Transactions")
export class Layer2TransactionController extends Layer2TransactionControllerBase {
  constructor(protected readonly service: Layer2TransactionService) {
    super(service);
  }
}
