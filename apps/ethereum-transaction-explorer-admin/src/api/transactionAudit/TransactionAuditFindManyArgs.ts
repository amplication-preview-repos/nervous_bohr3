import { TransactionAuditWhereInput } from "./TransactionAuditWhereInput";
import { TransactionAuditOrderByInput } from "./TransactionAuditOrderByInput";

export type TransactionAuditFindManyArgs = {
  where?: TransactionAuditWhereInput;
  orderBy?: Array<TransactionAuditOrderByInput>;
  skip?: number;
  take?: number;
};
