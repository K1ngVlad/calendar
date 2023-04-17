import styled from 'styled-components';

const HeroStyle = styled.div.attrs((props) => ({ ...props }))`
  width: 100%;
  height: 145px;
  display: grid;
  /* align-items: center;
  justify-content: space-between; */
  background: #f7f7f6;
  border-top: solid 2px #e6e7e7;
  border-bottom: solid 2px #e6e7e7;
  grid-template-areas: '. container';
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;
`;

const HeroContainerStyle = styled.div.attrs((props) => ({ ...props }))`
  height: 100%;
  grid-area: container;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DaysStyle = styled.div.attrs((props) => ({ ...props }))`
  width: 100%;
  height: 70px;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const MonthStyle = styled.div.attrs((props) => ({ ...props }))`
  width: 100%;
  padding: 0 10px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowStyle = styled.img.attrs(({ src, alt, onClick }) => ({
  src,
  alt,
  onClick,
}))`
  height: 100%;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transform: ${({ direct }) => direct === 'right' && 'rotate(180deg)'};
`;

const MonthTextStyle = styled.p.attrs((props) => ({ ...props }))`
  font-size: 20px;
`;

export {
  HeroStyle,
  HeroContainerStyle,
  DaysStyle,
  MonthStyle,
  MonthTextStyle,
  ArrowStyle,
};
