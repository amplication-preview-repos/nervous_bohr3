import { TokenTransfer as TTokenTransfer } from "../api/tokenTransfer/TokenTransfer";

export const TOKENTRANSFER_TITLE_FIELD = "id";

export const TokenTransferTitle = (record: TTokenTransfer): string => {
  return record.id?.toString() || String(record.id);
};
