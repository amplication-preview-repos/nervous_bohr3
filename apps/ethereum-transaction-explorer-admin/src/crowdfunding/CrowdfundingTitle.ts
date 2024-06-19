import { Crowdfunding as TCrowdfunding } from "../api/crowdfunding/Crowdfunding";

export const CROWDFUNDING_TITLE_FIELD = "id";

export const CrowdfundingTitle = (record: TCrowdfunding): string => {
  return record.id?.toString() || String(record.id);
};
