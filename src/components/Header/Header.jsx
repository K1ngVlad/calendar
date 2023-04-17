import { HeaderStyle, IconStyle, TitleStyle } from './styles';

import icon from '../../assets/plus.svg';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

const Header = () => {
  const { setEventDates } = useContext(GlobalContext);

  const onClickHeandler = () => {
    const result = prompt('Enter event time \nYYYY-MM-DD HH:mm:ss');
    if (!result) return;
    const newDate = new Date(result);
    if (`${newDate}` !== 'Invalid Date') {
      const year = newDate.getFullYear();
      const month = newDate.getMonth();
      const day = newDate.getDate();
      const hours = newDate.getHours();
      const minuts = newDate.getMinutes();
      const seconds = newDate.getSeconds();
      const minutIndex = Math.round(((minuts * 60 + seconds) / 3600) * 7);
      const time = `${year}-${month}-${day}-${hours}-${minutIndex}`;
      setEventDates((e) => new Set([...e, time]));
    } else {
      alert('Ошибка: Неверный формат даты');
    }
  };

  return (
    <HeaderStyle>
      <TitleStyle>Interview Calendar</TitleStyle>
      <IconStyle onClick={onClickHeandler} alt="+" src={icon} />
    </HeaderStyle>
  );
};

export { Header };
