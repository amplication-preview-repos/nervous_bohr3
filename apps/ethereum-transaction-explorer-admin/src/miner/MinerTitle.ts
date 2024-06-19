import { Miner as TMiner } from "../api/miner/Miner";

export const MINER_TITLE_FIELD = "id";

export const MinerTitle = (record: TMiner): string => {
  return record.id?.toString() || String(record.id);
};
