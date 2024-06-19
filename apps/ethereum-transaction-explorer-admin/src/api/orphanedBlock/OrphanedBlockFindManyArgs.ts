import { OrphanedBlockWhereInput } from "./OrphanedBlockWhereInput";
import { OrphanedBlockOrderByInput } from "./OrphanedBlockOrderByInput";

export type OrphanedBlockFindManyArgs = {
  where?: OrphanedBlockWhereInput;
  orderBy?: Array<OrphanedBlockOrderByInput>;
  skip?: number;
  take?: number;
};
