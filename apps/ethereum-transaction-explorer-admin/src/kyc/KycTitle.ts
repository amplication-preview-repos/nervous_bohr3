import { Kyc as TKyc } from "../api/kyc/Kyc";

export const KYC_TITLE_FIELD = "id";

export const KycTitle = (record: TKyc): string => {
  return record.id?.toString() || String(record.id);
};
