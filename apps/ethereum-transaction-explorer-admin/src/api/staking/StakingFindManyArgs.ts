import { StakingWhereInput } from "./StakingWhereInput";
import { StakingOrderByInput } from "./StakingOrderByInput";

export type StakingFindManyArgs = {
  where?: StakingWhereInput;
  orderBy?: Array<StakingOrderByInput>;
  skip?: number;
  take?: number;
};
