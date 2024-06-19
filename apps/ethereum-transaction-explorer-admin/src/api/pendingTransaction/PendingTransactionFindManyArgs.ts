import { PendingTransactionWhereInput } from "./PendingTransactionWhereInput";
import { PendingTransactionOrderByInput } from "./PendingTransactionOrderByInput";

export type PendingTransactionFindManyArgs = {
  where?: PendingTransactionWhereInput;
  orderBy?: Array<PendingTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
