import { Bridge as TBridge } from "../api/bridge/Bridge";

export const BRIDGE_TITLE_FIELD = "id";

export const BridgeTitle = (record: TBridge): string => {
  return record.id?.toString() || String(record.id);
};
