export const getDday = (itemDate) => {
  const today = new Date();
  const targetDate = new Date(itemDate);
  const diffTime = targetDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formatDday = (diffDays) => {
  if (diffDays === 0) return "D - Day";
  return diffDays > 0 ? `D - ${diffDays}` : `D + ${Math.abs(diffDays)}`;
};

export const formatDate = (itemDate) => {
  const date = new Date(itemDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
};

export const sortByDday = (items) =>
  [...items].sort((a, b) => getDday(a.date) - getDday(b.date));

export const parseMockData = (data) => {
  const processedData = data.map((item) => {
    const [startDate, endDate] = item.deadline.split(" ~ ");
    return {
      ...item,
      date: endDate.split(" ")[0],
      time: endDate.split(" ")[1],
    };
  });

  return processedData.sort((a, b) => {
    const today = new Date();
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const diffA = dateA - today;
    const diffB = dateB - today;

    return diffA - diffB;
  });
};
