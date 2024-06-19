import * as graphql from "@nestjs/graphql";
import { TransactionAuditResolverBase } from "./base/transactionAudit.resolver.base";
import { TransactionAudit } from "./base/TransactionAudit";
import { TransactionAuditService } from "./transactionAudit.service";

@graphql.Resolver(() => TransactionAudit)
export class TransactionAuditResolver extends TransactionAuditResolverBase {
  constructor(protected readonly service: TransactionAuditService) {
    super(service);
  }
}
