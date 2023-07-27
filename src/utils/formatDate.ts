const formatDate = (inputDate: string): string => {
  const dateObj = new Date(inputDate);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear() % 100;

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

export default formatDate;
