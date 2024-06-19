import { MinerWhereInput } from "./MinerWhereInput";
import { MinerOrderByInput } from "./MinerOrderByInput";

export type MinerFindManyArgs = {
  where?: MinerWhereInput;
  orderBy?: Array<MinerOrderByInput>;
  skip?: number;
  take?: number;
};
