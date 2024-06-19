import { Analytic as TAnalytic } from "../api/analytic/Analytic";

export const ANALYTIC_TITLE_FIELD = "id";

export const AnalyticTitle = (record: TAnalytic): string => {
  return record.id?.toString() || String(record.id);
};
