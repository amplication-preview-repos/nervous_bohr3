import { MultiSigWhereInput } from "./MultiSigWhereInput";
import { MultiSigOrderByInput } from "./MultiSigOrderByInput";

export type MultiSigFindManyArgs = {
  where?: MultiSigWhereInput;
  orderBy?: Array<MultiSigOrderByInput>;
  skip?: number;
  take?: number;
};
