import { Chain as TChain } from "../api/chain/Chain";

export const CHAIN_TITLE_FIELD = "id";

export const ChainTitle = (record: TChain): string => {
  return record.id?.toString() || String(record.id);
};
