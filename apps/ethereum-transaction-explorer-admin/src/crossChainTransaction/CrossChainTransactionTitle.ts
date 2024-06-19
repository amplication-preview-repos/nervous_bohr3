import { CrossChainTransaction as TCrossChainTransaction } from "../api/crossChainTransaction/CrossChainTransaction";

export const CROSSCHAINTRANSACTION_TITLE_FIELD = "id";

export const CrossChainTransactionTitle = (
  record: TCrossChainTransaction
): string => {
  return record.id?.toString() || String(record.id);
};
