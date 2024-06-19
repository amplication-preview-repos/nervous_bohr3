import { SidechainWhereInput } from "./SidechainWhereInput";
import { SidechainOrderByInput } from "./SidechainOrderByInput";

export type SidechainFindManyArgs = {
  where?: SidechainWhereInput;
  orderBy?: Array<SidechainOrderByInput>;
  skip?: number;
  take?: number;
};
