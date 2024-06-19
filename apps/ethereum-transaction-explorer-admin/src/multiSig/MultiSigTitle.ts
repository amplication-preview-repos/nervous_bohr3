import { MultiSig as TMultiSig } from "../api/multiSig/MultiSig";

export const MULTISIG_TITLE_FIELD = "id";

export const MultiSigTitle = (record: TMultiSig): string => {
  return record.id?.toString() || String(record.id);
};
