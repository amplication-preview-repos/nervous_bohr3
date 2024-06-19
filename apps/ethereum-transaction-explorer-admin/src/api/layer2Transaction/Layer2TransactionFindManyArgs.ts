import { Layer2TransactionWhereInput } from "./Layer2TransactionWhereInput";
import { Layer2TransactionOrderByInput } from "./Layer2TransactionOrderByInput";

export type Layer2TransactionFindManyArgs = {
  where?: Layer2TransactionWhereInput;
  orderBy?: Array<Layer2TransactionOrderByInput>;
  skip?: number;
  take?: number;
};
