import { HeaderStyle, IconStyle, TitleStyle } from './styles';

import icon from '../../assets/plus.svg';

const Header = () => {
  return (
    <HeaderStyle>
      <TitleStyle>Interview Calendar</TitleStyle>
      <IconStyle alt="+" src={icon} />
    </HeaderStyle>
  );
};

export { Header };
