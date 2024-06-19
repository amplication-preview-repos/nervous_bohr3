import { Bidding as TBidding } from "../api/bidding/Bidding";

export const BIDDING_TITLE_FIELD = "id";

export const BiddingTitle = (record: TBidding): string => {
  return record.id?.toString() || String(record.id);
};
