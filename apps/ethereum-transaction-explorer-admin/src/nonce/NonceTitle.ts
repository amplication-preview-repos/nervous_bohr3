import { Nonce as TNonce } from "../api/nonce/Nonce";

export const NONCE_TITLE_FIELD = "id";

export const NonceTitle = (record: TNonce): string => {
  return record.id?.toString() || String(record.id);
};
