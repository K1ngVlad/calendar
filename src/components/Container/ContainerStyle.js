import styled from 'styled-components';

const ContainerStyle = styled.div.attrs((props) => ({
  children: props.children,
}))`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background: ${({ background }) => background || 'none'};
`;

export { ContainerStyle };
