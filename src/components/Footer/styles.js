import styled from 'styled-components';

const FooterStyle = styled.div.attrs((props) => ({ ...props }))`
  width: 100%;
  height: 80px;
  background: #f7f7f6;
  border-top: solid 2px #e6e7e7;
  border-bottom: solid 2px #e6e7e7;
  display: flex;
  align-items: center;
  padding: 0 50px;
`;

export { FooterStyle };
