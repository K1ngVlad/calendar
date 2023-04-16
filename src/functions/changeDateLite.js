const changeDateLite = (
  dateRef,
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
  setCurrentWeekDay
) => {
  const date = dateRef.current;
  setCurrentDay(date.getDate());
  setCurrentMonth(date.getMonth());
  setCurrentYear(date.getFullYear());

  if (!date.getDay()) {
    setCurrentWeekDay(6);
  } else {
    setCurrentWeekDay(date.getDay() - 1);
  }
};

export { changeDateLite };
