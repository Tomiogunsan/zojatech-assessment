import { format } from "date-fns";

export const formatTime = (timeString: string) => {
  const date = new Date(`1970-01-01T${timeString}`);
  return format(date, 'hh:mm a'); 
};
