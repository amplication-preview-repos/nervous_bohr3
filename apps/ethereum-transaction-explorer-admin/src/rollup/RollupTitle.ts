import { Rollup as TRollup } from "../api/rollup/Rollup";

export const ROLLUP_TITLE_FIELD = "id";

export const RollupTitle = (record: TRollup): string => {
  return record.id?.toString() || String(record.id);
};
