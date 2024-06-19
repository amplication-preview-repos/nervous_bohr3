import { OffChainData as TOffChainData } from "../api/offChainData/OffChainData";

export const OFFCHAINDATA_TITLE_FIELD = "id";

export const OffChainDataTitle = (record: TOffChainData): string => {
  return record.id?.toString() || String(record.id);
};
