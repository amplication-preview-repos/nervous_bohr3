import { ValidatorReward as TValidatorReward } from "../api/validatorReward/ValidatorReward";

export const VALIDATORREWARD_TITLE_FIELD = "id";

export const ValidatorRewardTitle = (record: TValidatorReward): string => {
  return record.id?.toString() || String(record.id);
};
