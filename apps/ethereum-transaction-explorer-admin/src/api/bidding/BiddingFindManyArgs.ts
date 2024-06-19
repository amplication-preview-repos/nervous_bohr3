import { BiddingWhereInput } from "./BiddingWhereInput";
import { BiddingOrderByInput } from "./BiddingOrderByInput";

export type BiddingFindManyArgs = {
  where?: BiddingWhereInput;
  orderBy?: Array<BiddingOrderByInput>;
  skip?: number;
  take?: number;
};
