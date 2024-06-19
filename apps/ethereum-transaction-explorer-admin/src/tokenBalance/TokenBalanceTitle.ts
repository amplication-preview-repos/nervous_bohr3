import { TokenBalance as TTokenBalance } from "../api/tokenBalance/TokenBalance";

export const TOKENBALANCE_TITLE_FIELD = "id";

export const TokenBalanceTitle = (record: TTokenBalance): string => {
  return record.id?.toString() || String(record.id);
};
