import { Sidechain as TSidechain } from "../api/sidechain/Sidechain";

export const SIDECHAIN_TITLE_FIELD = "id";

export const SidechainTitle = (record: TSidechain): string => {
  return record.id?.toString() || String(record.id);
};
