import { format } from "date-fns";

export const formatTime = (timeString: string) => {
  const date = new Date(`1970-01-01T${timeString}`); // Create a Date object with the time string
  return format(date, 'hh:mm a'); // Format the time as HH:mm
};
