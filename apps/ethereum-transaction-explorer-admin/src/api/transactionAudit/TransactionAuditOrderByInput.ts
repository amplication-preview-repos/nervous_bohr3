import { SortOrder } from "../../util/SortOrder";

export type TransactionAuditOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
