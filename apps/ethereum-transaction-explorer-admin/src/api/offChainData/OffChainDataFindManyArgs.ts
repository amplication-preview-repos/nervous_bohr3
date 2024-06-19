import { OffChainDataWhereInput } from "./OffChainDataWhereInput";
import { OffChainDataOrderByInput } from "./OffChainDataOrderByInput";

export type OffChainDataFindManyArgs = {
  where?: OffChainDataWhereInput;
  orderBy?: Array<OffChainDataOrderByInput>;
  skip?: number;
  take?: number;
};
