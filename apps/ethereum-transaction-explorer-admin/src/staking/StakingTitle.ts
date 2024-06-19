import { Staking as TStaking } from "../api/staking/Staking";

export const STAKING_TITLE_FIELD = "id";

export const StakingTitle = (record: TStaking): string => {
  return record.id?.toString() || String(record.id);
};
