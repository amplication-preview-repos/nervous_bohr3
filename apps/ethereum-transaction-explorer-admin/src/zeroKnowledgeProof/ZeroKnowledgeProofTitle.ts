import { ZeroKnowledgeProof as TZeroKnowledgeProof } from "../api/zeroKnowledgeProof/ZeroKnowledgeProof";

export const ZEROKNOWLEDGEPROOF_TITLE_FIELD = "id";

export const ZeroKnowledgeProofTitle = (
  record: TZeroKnowledgeProof
): string => {
  return record.id?.toString() || String(record.id);
};
