import { BridgeWhereInput } from "./BridgeWhereInput";
import { BridgeOrderByInput } from "./BridgeOrderByInput";

export type BridgeFindManyArgs = {
  where?: BridgeWhereInput;
  orderBy?: Array<BridgeOrderByInput>;
  skip?: number;
  take?: number;
};
