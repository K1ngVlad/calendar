const changeDate = (
  dateRef,
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
  setCurrentWeek,
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

  const newDate = new Date(date.getTime());

  while (newDate.getDay() !== 1) {
    newDate.setDate(newDate.getDate() - 1);
  }
  newDate.setDate(newDate.getDate() - 1);

  const week = [];

  for (let i = 0; i < 7; i++) {
    newDate.setDate(newDate.getDate() + 1);
    week.push(newDate.getDate());
  }

  setCurrentWeek(week);
};

export { changeDate };
