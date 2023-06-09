import { useContext } from 'react';
import { DayElemStyle, DayNumberStyle, WeekWordStyle } from './styles';
import { GlobalContext } from '../../../GlobalContext';
import { changeDateLite } from '../../../functions';

const DayElem = (props) => {
  const { day, weekDay, primary, numberDay } = props;
  const {
    currentWeekDay,
    setCurrentDay,
    setCurrentMonth,
    setCurrentYear,
    setCurrentWeekDay,
    setChoisenCell,
    dateRef,
  } = useContext(GlobalContext);

  const onClickHeandler = () => {
    const date = dateRef.current;
    date.setDate(date.getDate() + numberDay - currentWeekDay);
    changeDateLite(
      dateRef,
      setCurrentDay,
      setCurrentMonth,
      setCurrentYear,
      setCurrentWeekDay
    );
    setChoisenCell(null);
  };

  return (
    <DayElemStyle onClick={onClickHeandler}>
      <WeekWordStyle>{weekDay}</WeekWordStyle>
      <DayNumberStyle primary={primary}>{day}</DayNumberStyle>
    </DayElemStyle>
  );
};

export { DayElem };
