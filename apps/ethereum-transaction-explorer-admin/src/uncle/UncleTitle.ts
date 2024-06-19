import { Uncle as TUncle } from "../api/uncle/Uncle";

export const UNCLE_TITLE_FIELD = "id";

export const UncleTitle = (record: TUncle): string => {
  return record.id?.toString() || String(record.id);
};
