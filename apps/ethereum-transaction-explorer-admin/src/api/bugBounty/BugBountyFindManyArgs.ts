import { BugBountyWhereInput } from "./BugBountyWhereInput";
import { BugBountyOrderByInput } from "./BugBountyOrderByInput";

export type BugBountyFindManyArgs = {
  where?: BugBountyWhereInput;
  orderBy?: Array<BugBountyOrderByInput>;
  skip?: number;
  take?: number;
};
