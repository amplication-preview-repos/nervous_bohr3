import { Governance as TGovernance } from "../api/governance/Governance";

export const GOVERNANCE_TITLE_FIELD = "id";

export const GovernanceTitle = (record: TGovernance): string => {
  return record.id?.toString() || String(record.id);
};
