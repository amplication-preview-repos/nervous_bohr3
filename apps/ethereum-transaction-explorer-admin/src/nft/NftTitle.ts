import { Nft as TNft } from "../api/nft/Nft";

export const NFT_TITLE_FIELD = "id";

export const NftTitle = (record: TNft): string => {
  return record.id?.toString() || String(record.id);
};
