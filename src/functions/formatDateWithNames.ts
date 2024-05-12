export function FormatDateWithNames(dateString: string) {
  let date = new Date(dateString);
  date.setHours(date.getHours() - 2);

  // Format the date and time
  let formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  let formattedTime = date.toLocaleTimeString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} `;
}
