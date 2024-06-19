import { SyncStatus as TSyncStatus } from "../api/syncStatus/SyncStatus";

export const SYNCSTATUS_TITLE_FIELD = "id";

export const SyncStatusTitle = (record: TSyncStatus): string => {
  return record.id?.toString() || String(record.id);
};
