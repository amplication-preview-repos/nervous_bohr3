import { TransactionAudit as TTransactionAudit } from "../api/transactionAudit/TransactionAudit";

export const TRANSACTIONAUDIT_TITLE_FIELD = "id";

export const TransactionAuditTitle = (record: TTransactionAudit): string => {
  return record.id?.toString() || String(record.id);
};
