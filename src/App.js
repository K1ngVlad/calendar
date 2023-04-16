import { useEffect, useRef, useState } from 'react';
import { Container, Footer, Header, Hero, Main } from './components';
import { GlobalProvider } from './GlobalContext';
import { changeDate } from './functions';

const App = () => {
  const dateRef = useRef(new Date());
  const [currentDay, setCurrentDay] = useState(null);
  const [currentWeekDay, setCurrentWeekDay] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(Array(7).fill(0));
  const [currentMonth, setCurrentMonth] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    changeDate(
      dateRef,
      setCurrentDay,
      setCurrentMonth,
      setCurrentYear,
      setCurrentWeek,
      setCurrentWeekDay
    );
  }, [
    dateRef,
    setCurrentDay,
    setCurrentWeek,
    setCurrentMonth,
    setCurrentYear,
    setCurrentWeekDay,
  ]);

  return (
    <GlobalProvider
      value={{
        currentDay,
        currentWeek,
        currentMonth,
        currentYear,
        currentWeekDay,
        setCurrentDay,
        setCurrentMonth,
        setCurrentYear,
        setCurrentWeek,
        setCurrentWeekDay,
        dateRef,
      }}
    >
      <Container>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </Container>
    </GlobalProvider>
  );
};

export default App;
