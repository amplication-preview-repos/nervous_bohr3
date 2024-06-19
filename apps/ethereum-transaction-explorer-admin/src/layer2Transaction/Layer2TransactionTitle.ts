import { Layer2Transaction as TLayer2Transaction } from "../api/layer2Transaction/Layer2Transaction";

export const LAYER2TRANSACTION_TITLE_FIELD = "id";

export const Layer2TransactionTitle = (record: TLayer2Transaction): string => {
  return record.id?.toString() || String(record.id);
};
