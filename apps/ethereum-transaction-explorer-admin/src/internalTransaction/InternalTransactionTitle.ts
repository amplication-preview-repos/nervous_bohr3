import { InternalTransaction as TInternalTransaction } from "../api/internalTransaction/InternalTransaction";

export const INTERNALTRANSACTION_TITLE_FIELD = "id";

export const InternalTransactionTitle = (
  record: TInternalTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
