import { PriceFeed as TPriceFeed } from "../api/priceFeed/PriceFeed";

export const PRICEFEED_TITLE_FIELD = "id";

export const PriceFeedTitle = (record: TPriceFeed): string => {
  return record.id?.toString() || String(record.id);
};
