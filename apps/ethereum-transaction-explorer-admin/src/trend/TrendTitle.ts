import { Trend as TTrend } from "../api/trend/Trend";

export const TREND_TITLE_FIELD = "id";

export const TrendTitle = (record: TTrend): string => {
  return record.id?.toString() || String(record.id);
};
