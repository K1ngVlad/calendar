import styled from 'styled-components';

const MainStyle = styled.div.attrs((props) => ({ ...props }))`
  width: 100%;
  /* height: 280px; */
  height: calc(100% - 355px);
`;

export { MainStyle };
