import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import {
  MainStyle,
  TimeStyle,
  TimeElemStyle,
  DateCellsStyle,
  Cell,
} from './styles';

const timeArr = Array.from({ length: 24 }, (_, i) => {
  if (i < 10) return `0${i}`;
  return `${i}`;
});

const cellsArr = Array.from({ length: 168 }, (_, i) => {
  const hourId = Math.floor(i / 7);
  const minutId = i % 7;
  return [hourId, minutId];
});

const Main = () => {
  const {
    currentMonth,
    currentYear,
    currentDay,
    eventDates,
    setChoisenCell,
    choisenCell,
  } = useContext(GlobalContext);
  return (
    <MainStyle>
      <TimeStyle>
        {timeArr.map((e) => (
          <TimeElemStyle key={e}>{`${e}:00`}</TimeElemStyle>
        ))}
      </TimeStyle>
      <DateCellsStyle>
        {cellsArr.map((e) => {
          const fullTime = `${currentYear}-${currentMonth}-${currentDay}-${e[0]}-${e[1]}`;
          const choisen = choisenCell === fullTime;
          const event = eventDates.has(fullTime);
          return (
            <Cell
              event={event}
              choisen={choisen}
              key={fullTime}
              onClick={() => {
                setChoisenCell(fullTime);
              }}
            />
          );
        })}
      </DateCellsStyle>
    </MainStyle>
  );
};

export { Main };
