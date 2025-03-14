export const sortByDday = (items) =>
  [...items].sort((a, b) => getDday(a.date) - getDday(b.date));

export const parseMockData = (data) => {
  return data.map((item) => {
    const deadline = item.deadline || "";
    const parts = deadline.split(" ~ ");
    const endDate = parts.length > 1 ? parts[1] : parts[0];

    return {
      ...item,
      date: endDate,
      time: endDate ? endDate.split(" ")[1] : "",
    };
  });
};

// Format date to display in UI
export const formatDate = (dateString) => {
  if (!dateString) return "";

  // Parse the date string
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error("Invalid date:", dateString);
    return "";
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};

// Calculate D-day based on deadline
export const getDday = (dateString) => {
  if (!dateString) return 0;

  // Parse the date string
  const targetDate = new Date(dateString);

  // Check if the date is valid
  if (isNaN(targetDate.getTime())) {
    console.error("Invalid date for D-day calculation:", dateString);
    return 0;
  }

  const today = new Date();

  // Reset time to midnight for accurate day calculation
  today.setHours(0, 0, 0, 0);
  const todayDate = new Date(today);

  // Set target date to end of day for deadline
  const targetDateOnly = new Date(targetDate);
  targetDateOnly.setHours(23, 59, 59, 999);

  // Calculate difference in milliseconds and convert to days
  const diffTime = targetDateOnly - todayDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

// Format D-day text
export const formatDday = (days) => {
  if (days === 0) return "D - Day";
  if (days > 0) return `D - ${days}`;
  return `D + ${Math.abs(days)}`;
};
