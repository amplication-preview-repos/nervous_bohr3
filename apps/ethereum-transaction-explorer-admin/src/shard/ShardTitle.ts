import { Shard as TShard } from "../api/shard/Shard";

export const SHARD_TITLE_FIELD = "id";

export const ShardTitle = (record: TShard): string => {
  return record.id?.toString() || String(record.id);
};
