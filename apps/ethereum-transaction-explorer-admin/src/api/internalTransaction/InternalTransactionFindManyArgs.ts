import { InternalTransactionWhereInput } from "./InternalTransactionWhereInput";
import { InternalTransactionOrderByInput } from "./InternalTransactionOrderByInput";

export type InternalTransactionFindManyArgs = {
  where?: InternalTransactionWhereInput;
  orderBy?: Array<InternalTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
