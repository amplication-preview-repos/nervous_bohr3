import { Gas as TGas } from "../api/gas/Gas";

export const GAS_TITLE_FIELD = "id";

export const GasTitle = (record: TGas): string => {
  return record.id?.toString() || String(record.id);
};
