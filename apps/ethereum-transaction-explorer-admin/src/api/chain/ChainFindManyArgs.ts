import { ChainWhereInput } from "./ChainWhereInput";
import { ChainOrderByInput } from "./ChainOrderByInput";

export type ChainFindManyArgs = {
  where?: ChainWhereInput;
  orderBy?: Array<ChainOrderByInput>;
  skip?: number;
  take?: number;
};
