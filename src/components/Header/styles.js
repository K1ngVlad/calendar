import styled from 'styled-components';

const HeaderStyle = styled.header.attrs((props) => ({ ...props }))`
  width: 100%;
  height: 130px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleStyle = styled.h1.attrs((props) => ({ ...props }))`
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
`;

const IconStyle = styled.img.attrs((props) => ({ ...props }))`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export { HeaderStyle, TitleStyle, IconStyle };
