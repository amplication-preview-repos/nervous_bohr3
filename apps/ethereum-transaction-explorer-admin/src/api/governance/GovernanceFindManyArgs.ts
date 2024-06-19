import { GovernanceWhereInput } from "./GovernanceWhereInput";
import { GovernanceOrderByInput } from "./GovernanceOrderByInput";

export type GovernanceFindManyArgs = {
  where?: GovernanceWhereInput;
  orderBy?: Array<GovernanceOrderByInput>;
  skip?: number;
  take?: number;
};
