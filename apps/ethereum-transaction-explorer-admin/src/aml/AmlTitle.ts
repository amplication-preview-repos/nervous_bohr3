import { Aml as TAml } from "../api/aml/Aml";

export const AML_TITLE_FIELD = "id";

export const AmlTitle = (record: TAml): string => {
  return record.id?.toString() || String(record.id);
};
