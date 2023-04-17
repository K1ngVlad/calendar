import { useContext } from 'react';
import { FooterBtnStyle, FooterStyle } from './styles';
import { GlobalContext } from '../../GlobalContext';
import { changeDate } from '../../functions/changeDate';

const Footer = () => {
  const {
    eventDates,
    choisenCell,
    setChoisenCell,
    setEventDates,
    dateRef,
    setCurrentDay,
    setCurrentMonth,
    setCurrentYear,
    setCurrentWeek,
    setCurrentWeekDay,
  } = useContext(GlobalContext);

  const deleteEvent = () => {
    setEventDates((e) => {
      const newSet = new Set(e);
      newSet.delete(choisenCell);
      return newSet;
    });
    setChoisenCell(null);
  };

  const goToday = () => {
    dateRef.current = new Date();
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
    <FooterStyle>
      <FooterBtnStyle onClick={goToday}>Today</FooterBtnStyle>
      {eventDates.has(choisenCell) && (
        <FooterBtnStyle onClick={deleteEvent}>Delete</FooterBtnStyle>
      )}
    </FooterStyle>
  );
};

export { Footer };
