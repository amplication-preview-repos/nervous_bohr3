import { SyncStatusWhereInput } from "./SyncStatusWhereInput";
import { SyncStatusOrderByInput } from "./SyncStatusOrderByInput";

export type SyncStatusFindManyArgs = {
  where?: SyncStatusWhereInput;
  orderBy?: Array<SyncStatusOrderByInput>;
  skip?: number;
  take?: number;
};
