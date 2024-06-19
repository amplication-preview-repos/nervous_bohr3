import { Validator as TValidator } from "../api/validator/Validator";

export const VALIDATOR_TITLE_FIELD = "id";

export const ValidatorTitle = (record: TValidator): string => {
  return record.id?.toString() || String(record.id);
};
