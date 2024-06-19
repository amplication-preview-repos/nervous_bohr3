import { MasterNode as TMasterNode } from "../api/masterNode/MasterNode";

export const MASTERNODE_TITLE_FIELD = "id";

export const MasterNodeTitle = (record: TMasterNode): string => {
  return record.id?.toString() || String(record.id);
};
