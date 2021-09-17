import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};

`;

export const Title = styled.Text`
  font-family: ${({theme} ) => theme.fonts.regular}

`;
