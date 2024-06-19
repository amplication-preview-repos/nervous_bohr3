import { ValidatorRewardWhereInput } from "./ValidatorRewardWhereInput";
import { ValidatorRewardOrderByInput } from "./ValidatorRewardOrderByInput";

export type ValidatorRewardFindManyArgs = {
  where?: ValidatorRewardWhereInput;
  orderBy?: Array<ValidatorRewardOrderByInput>;
  skip?: number;
  take?: number;
};
