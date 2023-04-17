import styled from 'styled-components';

const DayElemStyle = styled.div.attrs((props) => ({ ...props }))`
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
`;

const WeekWordStyle = styled.span.attrs((props) => ({ ...props }))`
  width: 50px;
  text-align: center;
  font-size: 16px;
`;

const DayNumberStyle = styled.span.attrs((props) => ({ ...props }))`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  background: ${({ primary }) => (primary ? '#ff3030' : 'none')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
`;

export { DayElemStyle, WeekWordStyle, DayNumberStyle };
