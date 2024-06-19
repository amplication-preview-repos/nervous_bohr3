import { NonceWhereInput } from "./NonceWhereInput";
import { NonceOrderByInput } from "./NonceOrderByInput";

export type NonceFindManyArgs = {
  where?: NonceWhereInput;
  orderBy?: Array<NonceOrderByInput>;
  skip?: number;
  take?: number;
};
