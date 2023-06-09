import { DayElem } from './DayElem';
import { monthArr, weekArr } from './api';
import {
  HeroStyle,
  HeroContainerStyle,
  DaysStyle,
  MonthStyle,
  ArrowStyle,
  MonthTextStyle,
} from './styles';

import icon from '../../assets/arrow.svg';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import { changeDate } from '../../functions';

const Hero = () => {
  const {
    currentWeek,
    currentWeekDay,
    currentMonth,
    currentYear,
    currentDay,
    setCurrentDay,
    setCurrentMonth,
    setCurrentYear,
    setCurrentWeek,
    setCurrentWeekDay,
    setChoisenCell,
    dateRef,
  } = useContext(GlobalContext);

  const onClickHeandler = (direct) => {
    const date = dateRef.current;
    date.setDate(direct === 'left' ? currentDay - 7 : currentDay + 7);
    changeDate(
      dateRef,
      setCurrentDay,
      setCurrentMonth,
      setCurrentYear,
      setCurrentWeek,
      setCurrentWeekDay
    );
    setChoisenCell(null);
  };

  return (
    <HeroStyle>
      <HeroContainerStyle>
        <DaysStyle>
          {currentWeek &&
            currentWeek.map((e, i) => {
              return (
                <DayElem
                  day={e}
                  key={i}
                  weekDay={weekArr[i]}
                  numberDay={i}
                  primary={currentWeekDay === i}
                />
              );
            })}
        </DaysStyle>
        <MonthStyle>
          <ArrowStyle
            onClick={() => onClickHeandler('left')}
            src={icon}
            direct="left"
            alt="<"
          />
          <MonthTextStyle>{`${monthArr[currentMonth]} ${currentYear}`}</MonthTextStyle>
          <ArrowStyle
            onClick={() => onClickHeandler('right')}
            src={icon}
            direct="right"
            alt=">"
          />
        </MonthStyle>
      </HeroContainerStyle>
    </HeroStyle>
  );
};

export { Hero };
