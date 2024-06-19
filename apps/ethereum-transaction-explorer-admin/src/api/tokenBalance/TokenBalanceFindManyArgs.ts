import { TokenBalanceWhereInput } from "./TokenBalanceWhereInput";
import { TokenBalanceOrderByInput } from "./TokenBalanceOrderByInput";

export type TokenBalanceFindManyArgs = {
  where?: TokenBalanceWhereInput;
  orderBy?: Array<TokenBalanceOrderByInput>;
  skip?: number;
  take?: number;
};
