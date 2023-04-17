import styled from 'styled-components';

const ContainerStyle = styled.div.attrs(({ children }) => ({
  children,
}))`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: white;
`;

const BoxStyle = styled.div.attrs(({ children }) => ({
  children,
}))`
  width: 100%;
  height: 100%;
  max-width: 740px;
`;

export { ContainerStyle, BoxStyle };
