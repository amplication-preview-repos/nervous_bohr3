import { SecurityIncidentWhereInput } from "./SecurityIncidentWhereInput";
import { SecurityIncidentOrderByInput } from "./SecurityIncidentOrderByInput";

export type SecurityIncidentFindManyArgs = {
  where?: SecurityIncidentWhereInput;
  orderBy?: Array<SecurityIncidentOrderByInput>;
  skip?: number;
  take?: number;
};
