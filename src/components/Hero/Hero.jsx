import { DayElem } from './DayElem';
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

const monthArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekArr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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
    dateRef,
  } = useContext(GlobalContext);
  return (
    <HeroStyle>
      {/* <div>sad</div> */}
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
              // return <DayElem />;
            })}
        </DaysStyle>
        <MonthStyle>
          <ArrowStyle
            onClick={() => {
              const date = dateRef.current;
              date.setDate(currentDay - 7);
              changeDate(
                dateRef,
                setCurrentDay,
                setCurrentMonth,
                setCurrentYear,
                setCurrentWeek,
                setCurrentWeekDay
              );
            }}
            src={icon}
            direct="left"
            alt="<"
          />
          <MonthTextStyle>{`${monthArr[currentMonth]} ${currentYear}`}</MonthTextStyle>
          <ArrowStyle
            onClick={() => {
              const date = dateRef.current;
              date.setDate(currentDay + 7);
              changeDate(
                dateRef,
                setCurrentDay,
                setCurrentMonth,
                setCurrentYear,
                setCurrentWeek,
                setCurrentWeekDay
              );
            }}
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
