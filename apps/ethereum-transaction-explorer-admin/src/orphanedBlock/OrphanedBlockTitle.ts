import { OrphanedBlock as TOrphanedBlock } from "../api/orphanedBlock/OrphanedBlock";

export const ORPHANEDBLOCK_TITLE_FIELD = "id";

export const OrphanedBlockTitle = (record: TOrphanedBlock): string => {
  return record.id?.toString() || String(record.id);
};
