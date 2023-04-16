import { ContainerStyle } from './ContainerStyle';

const Container = ({ children }) => {
  return (
    <ContainerStyle
      width="100vw"
      height="100vh"
      display="flex"
      justify="center"
      background="white"
    >
      <ContainerStyle width="100%" height="100%" maxWidth="740px">
        {children}
      </ContainerStyle>
    </ContainerStyle>
  );
};

export { Container };
