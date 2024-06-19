import { Network as TNetwork } from "../api/network/Network";

export const NETWORK_TITLE_FIELD = "id";

export const NetworkTitle = (record: TNetwork): string => {
  return record.id?.toString() || String(record.id);
};
