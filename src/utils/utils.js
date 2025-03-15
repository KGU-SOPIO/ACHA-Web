export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error("Invalid date:", dateString);
    return "";
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};

export const getDday = (dateString) => {
  if (!dateString) return 0;

  const targetDate = new Date(dateString);

  if (isNaN(targetDate.getTime())) {
    console.error("Invalid date for D-day calculation:", dateString);
    return 0;
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const todayDate = new Date(today);

  const targetDateOnly = new Date(targetDate);
  targetDateOnly.setHours(23, 59, 59, 999);

  const diffTime = targetDateOnly - todayDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const formatDday = (days) => {
  if (days === 0) return "D - Day";
  if (days > 0) return `D - ${days}`;
  return `D + ${Math.abs(days)}`;
};
