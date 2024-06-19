import { UncleWhereInput } from "./UncleWhereInput";
import { UncleOrderByInput } from "./UncleOrderByInput";

export type UncleFindManyArgs = {
  where?: UncleWhereInput;
  orderBy?: Array<UncleOrderByInput>;
  skip?: number;
  take?: number;
};
