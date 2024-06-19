import { PriceFeedWhereInput } from "./PriceFeedWhereInput";
import { PriceFeedOrderByInput } from "./PriceFeedOrderByInput";

export type PriceFeedFindManyArgs = {
  where?: PriceFeedWhereInput;
  orderBy?: Array<PriceFeedOrderByInput>;
  skip?: number;
  take?: number;
};
