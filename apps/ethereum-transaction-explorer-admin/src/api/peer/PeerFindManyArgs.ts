import { PeerWhereInput } from "./PeerWhereInput";
import { PeerOrderByInput } from "./PeerOrderByInput";

export type PeerFindManyArgs = {
  where?: PeerWhereInput;
  orderBy?: Array<PeerOrderByInput>;
  skip?: number;
  take?: number;
};
