import { BugBounty as TBugBounty } from "../api/bugBounty/BugBounty";

export const BUGBOUNTY_TITLE_FIELD = "id";

export const BugBountyTitle = (record: TBugBounty): string => {
  return record.id?.toString() || String(record.id);
};
