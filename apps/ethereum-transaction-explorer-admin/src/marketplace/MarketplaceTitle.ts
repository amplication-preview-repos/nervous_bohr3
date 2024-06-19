import { Marketplace as TMarketplace } from "../api/marketplace/Marketplace";

export const MARKETPLACE_TITLE_FIELD = "id";

export const MarketplaceTitle = (record: TMarketplace): string => {
  return record.id?.toString() || String(record.id);
};
