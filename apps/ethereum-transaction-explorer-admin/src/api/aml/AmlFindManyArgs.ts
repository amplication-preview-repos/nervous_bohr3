import { AmlWhereInput } from "./AmlWhereInput";
import { AmlOrderByInput } from "./AmlOrderByInput";

export type AmlFindManyArgs = {
  where?: AmlWhereInput;
  orderBy?: Array<AmlOrderByInput>;
  skip?: number;
  take?: number;
};
