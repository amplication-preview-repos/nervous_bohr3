import { RollupWhereInput } from "./RollupWhereInput";
import { RollupOrderByInput } from "./RollupOrderByInput";

export type RollupFindManyArgs = {
  where?: RollupWhereInput;
  orderBy?: Array<RollupOrderByInput>;
  skip?: number;
  take?: number;
};
