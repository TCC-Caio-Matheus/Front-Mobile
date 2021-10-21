import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  margin: ${RFValue(12)}px;
`;

export const DefaultInput = styled.TextInput`
  width: 100%;
  height: ${RFValue(45)}px;
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  margin-left: ${RFValue(12)}px;
  margin-bottom: ${RFValue(6)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
