import { ValidatorWhereInput } from "./ValidatorWhereInput";
import { ValidatorOrderByInput } from "./ValidatorOrderByInput";

export type ValidatorFindManyArgs = {
  where?: ValidatorWhereInput;
  orderBy?: Array<ValidatorOrderByInput>;
  skip?: number;
  take?: number;
};
