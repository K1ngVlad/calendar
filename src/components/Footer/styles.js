import styled from 'styled-components';

const FooterStyle = styled.footer.attrs((props) => ({ ...props }))`
  width: 100%;
  height: 80px;
  background: #f7f7f6;
  border-top: solid 2px #e6e7e7;
  border-bottom: solid 2px #e6e7e7;
  display: flex;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 425px) {
    padding: 0 25px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterBtnStyle = styled.span.attrs((props) => ({ ...props }))`
  font-size: 26px;
  color: #fe3130;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
`;

export { FooterStyle, FooterBtnStyle };
