import { Insurance as TInsurance } from "../api/insurance/Insurance";

export const INSURANCE_TITLE_FIELD = "id";

export const InsuranceTitle = (record: TInsurance): string => {
  return record.id?.toString() || String(record.id);
};
