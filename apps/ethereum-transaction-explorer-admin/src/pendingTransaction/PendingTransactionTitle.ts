import { PendingTransaction as TPendingTransaction } from "../api/pendingTransaction/PendingTransaction";

export const PENDINGTRANSACTION_TITLE_FIELD = "id";

export const PendingTransactionTitle = (
  record: TPendingTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
