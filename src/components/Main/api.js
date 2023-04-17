const timeArr = Array.from({ length: 24 }, (_, i) => {
  if (i < 10) return `0${i}`;
  return `${i}`;
});

const cellsArr = Array.from({ length: 168 }, (_, i) => {
  const hourId = Math.floor(i / 7);
  const minutId = i % 7;
  return [hourId, minutId];
});

export { timeArr, cellsArr };
