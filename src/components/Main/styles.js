import styled from 'styled-components';

const MainStyle = styled.main.attrs((props) => ({ ...props }))`
  width: 100%;
  height: calc(100% - 355px);
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const TimeStyle = styled.main.attrs((props) => ({ ...props }))`
  display: grid;
  grid-template-rows: repeat(24, 52px);
  user-select: none;
  -webkit-user-select: none;
  @media (max-width: 425px) {
    grid-template-rows: repeat(24, 32px);
  }
`;

const TimeElemStyle = styled.div.attrs((props) => ({ ...props }))`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
`;

const DateCellsStyle = styled.div.attrs((props) => ({ ...props }))`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(24, 50px);
  gap: 2px;
  border-top: solid 25px white;
  padding-top: 2px;
  background: #e7e6e7;
  @media (max-width: 425px) {
    border-top: solid 15px white;
    grid-template-rows: repeat(24, 30px);
  }
`;

const Cell = styled.div.attrs(({ onClick }) => ({ onClick }))`
  position: relative;
  border: solid white 2px;
  transition-duration: 0.2s;
  background: ${({ event, choisen }) =>
    choisen ? '#b3b6fe' : event ? '#ebedfe' : 'white'};

  cursor: pointer;
  &:hover {
    background: ${({ event, choisen }) =>
      choisen ? '#b3b6fea8' : '#ebedfeb0'};
  }
`;

export { MainStyle, TimeStyle, TimeElemStyle, DateCellsStyle, Cell };
