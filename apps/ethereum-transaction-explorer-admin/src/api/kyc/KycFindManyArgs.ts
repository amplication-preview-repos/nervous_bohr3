import { KycWhereInput } from "./KycWhereInput";
import { KycOrderByInput } from "./KycOrderByInput";

export type KycFindManyArgs = {
  where?: KycWhereInput;
  orderBy?: Array<KycOrderByInput>;
  skip?: number;
  take?: number;
};
