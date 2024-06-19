import { ValidatorSlash as TValidatorSlash } from "../api/validatorSlash/ValidatorSlash";

export const VALIDATORSLASH_TITLE_FIELD = "id";

export const ValidatorSlashTitle = (record: TValidatorSlash): string => {
  return record.id?.toString() || String(record.id);
};
