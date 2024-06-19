import { AnalyticWhereInput } from "./AnalyticWhereInput";
import { AnalyticOrderByInput } from "./AnalyticOrderByInput";

export type AnalyticFindManyArgs = {
  where?: AnalyticWhereInput;
  orderBy?: Array<AnalyticOrderByInput>;
  skip?: number;
  take?: number;
};
