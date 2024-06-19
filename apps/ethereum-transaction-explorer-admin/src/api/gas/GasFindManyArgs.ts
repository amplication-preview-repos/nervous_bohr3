import { GasWhereInput } from "./GasWhereInput";
import { GasOrderByInput } from "./GasOrderByInput";

export type GasFindManyArgs = {
  where?: GasWhereInput;
  orderBy?: Array<GasOrderByInput>;
  skip?: number;
  take?: number;
};
