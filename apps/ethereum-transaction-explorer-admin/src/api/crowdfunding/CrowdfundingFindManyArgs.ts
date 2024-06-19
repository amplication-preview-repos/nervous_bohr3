import { CrowdfundingWhereInput } from "./CrowdfundingWhereInput";
import { CrowdfundingOrderByInput } from "./CrowdfundingOrderByInput";

export type CrowdfundingFindManyArgs = {
  where?: CrowdfundingWhereInput;
  orderBy?: Array<CrowdfundingOrderByInput>;
  skip?: number;
  take?: number;
};
