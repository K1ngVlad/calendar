import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { timeArr, cellsArr } from './api';
import {
  MainStyle,
  TimeStyle,
  TimeElemStyle,
  DateCellsStyle,
  Cell,
} from './styles';

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
