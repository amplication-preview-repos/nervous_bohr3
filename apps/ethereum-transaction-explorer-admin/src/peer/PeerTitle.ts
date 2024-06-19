import { Peer as TPeer } from "../api/peer/Peer";

export const PEER_TITLE_FIELD = "id";

export const PeerTitle = (record: TPeer): string => {
  return record.id?.toString() || String(record.id);
};
