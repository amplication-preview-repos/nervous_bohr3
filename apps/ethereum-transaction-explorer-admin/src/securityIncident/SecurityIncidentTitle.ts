import { SecurityIncident as TSecurityIncident } from "../api/securityIncident/SecurityIncident";

export const SECURITYINCIDENT_TITLE_FIELD = "id";

export const SecurityIncidentTitle = (record: TSecurityIncident): string => {
  return record.id?.toString() || String(record.id);
};
