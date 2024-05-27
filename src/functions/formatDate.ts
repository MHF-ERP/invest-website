export function formatDate(date: Date) {
  const currentDateString = date.toISOString().slice(0, 10); // Extract YYYY-MM-DD
  return currentDateString;
}
export function changeDate(date: Date, value: number) {
  const changedDate = new Date(date.getTime() - value * 24 * 60 * 60 * 1000);
  const changed = new Date(
    changedDate.getFullYear(),
    changedDate.getMonth(),
    changedDate.getDate(),
    10,
    0
  );

  const changedDateString = changed.toISOString().slice(0, 10); // Extract YYYY-MM-DD
  return changedDateString;
}
export function formatDate2(inputDate: string) {
  // Split the input date into components (year, month, day)
  const [year, month, day] = inputDate.split("-");

  // Create a Date object from the components
  const dateObj = new Date(`${year}-${month}-${day}`);

  // Get the day, month, and year in the desired format
  const dayFormatted = dateObj.getDate();
  const monthFormatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(dateObj);
  const yearFormatted = dateObj.getFullYear();

  // Combine the formatted components into the desired format
  const formattedDate = `${dayFormatted} ${monthFormatted} ${yearFormatted}`;

  return formattedDate;
}
