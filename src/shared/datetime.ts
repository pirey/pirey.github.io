import { format } from "date-fns";

export function formatDate(date?: Date) {
  try {
    // return format(date ?? new Date(), "P", { locale: id });
    return format(date ?? new Date(), "dd MMM yyyy");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return date?.toLocaleDateString();
  }
}
