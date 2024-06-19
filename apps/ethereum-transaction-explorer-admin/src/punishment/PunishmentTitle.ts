import { Punishment as TPunishment } from "../api/punishment/Punishment";

export const PUNISHMENT_TITLE_FIELD = "id";

export const PunishmentTitle = (record: TPunishment): string => {
  return record.id?.toString() || String(record.id);
};
