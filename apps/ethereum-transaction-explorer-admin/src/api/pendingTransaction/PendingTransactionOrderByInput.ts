import { SortOrder } from "../../util/SortOrder";

export type PendingTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
