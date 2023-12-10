import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const tickDateFormatter = (ts: string) => {
  const date = new Date(ts);
  if (date.getDate() % 1 === 0) {
    return format(date, "MMM d|");
  }
  return "";
};

export const tooltipDateFormatter = (ts: string) =>
  format(new Date(ts), "eeee, d MMM, yyyy HH:mm", {
    locale: pl,
  });
