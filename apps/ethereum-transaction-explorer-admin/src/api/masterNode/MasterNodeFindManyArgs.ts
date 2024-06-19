import { MasterNodeWhereInput } from "./MasterNodeWhereInput";
import { MasterNodeOrderByInput } from "./MasterNodeOrderByInput";

export type MasterNodeFindManyArgs = {
  where?: MasterNodeWhereInput;
  orderBy?: Array<MasterNodeOrderByInput>;
  skip?: number;
  take?: number;
};
