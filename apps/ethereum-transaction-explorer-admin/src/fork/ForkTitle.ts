import { Fork as TFork } from "../api/fork/Fork";

export const FORK_TITLE_FIELD = "id";

export const ForkTitle = (record: TFork): string => {
  return record.id?.toString() || String(record.id);
};
