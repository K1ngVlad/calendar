import { ContainerStyle, BoxStyle } from './ContainerStyle';

const Container = ({ children }) => {
  return (
    <ContainerStyle>
      <BoxStyle>{children}</BoxStyle>
    </ContainerStyle>
  );
};

export { Container };
