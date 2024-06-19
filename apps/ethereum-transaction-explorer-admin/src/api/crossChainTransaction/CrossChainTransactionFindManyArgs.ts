import { CrossChainTransactionWhereInput } from "./CrossChainTransactionWhereInput";
import { CrossChainTransactionOrderByInput } from "./CrossChainTransactionOrderByInput";

export type CrossChainTransactionFindManyArgs = {
  where?: CrossChainTransactionWhereInput;
  orderBy?: Array<CrossChainTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
