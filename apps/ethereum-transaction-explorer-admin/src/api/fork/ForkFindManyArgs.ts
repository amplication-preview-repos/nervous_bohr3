import { ForkWhereInput } from "./ForkWhereInput";
import { ForkOrderByInput } from "./ForkOrderByInput";

export type ForkFindManyArgs = {
  where?: ForkWhereInput;
  orderBy?: Array<ForkOrderByInput>;
  skip?: number;
  take?: number;
};
