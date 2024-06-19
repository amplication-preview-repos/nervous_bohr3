import { ShardWhereInput } from "./ShardWhereInput";
import { ShardOrderByInput } from "./ShardOrderByInput";

export type ShardFindManyArgs = {
  where?: ShardWhereInput;
  orderBy?: Array<ShardOrderByInput>;
  skip?: number;
  take?: number;
};
