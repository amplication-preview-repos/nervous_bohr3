import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionAuditService } from "./transactionAudit.service";
import { TransactionAuditControllerBase } from "./base/transactionAudit.controller.base";

@swagger.ApiTags("transactionAudits")
@common.Controller("transactionAudits")
export class TransactionAuditController extends TransactionAuditControllerBase {
  constructor(protected readonly service: TransactionAuditService) {
    super(service);
  }
}
